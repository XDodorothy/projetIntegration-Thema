import '../styles/sheet.css'; 
import '../styles/styles.css'; 
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Actor from "../components/Actor";
import Movie from "../components/Movie";
import * as scriptFunctions from '../script';
import { Rating } from '../script';
import { useHistory, useParams } from "react-router-dom";
import HoverCarousel from '../script';


const MovieSheet = (props) => {
  const { id: idM } = useParams();
  const id = props.location.state?.id || idM; // Utilisation de location.state ou de useParams
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=166b9170e2b5bafde803f3f96ee6f452`;
  const URL_CREDITS = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
  const URL_SIMILAR = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=166b9170e2b5bafde803f3f96ee6f452`;
  const URL_VIDEOS = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=166b9170e2b5bafde803f3f96ee6f452`;
  const history = useHistory();
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [credits, setCredits] = useState([]); // actor cast
  const [similar, setSimilar] = useState([]); // similar movies
  const [trailerUrl, setTrailerUrl] = useState(""); // bande annonce
  window.scrollTo({ top: 0, behavior: "instant" });

  const handleMovieClick = (movieId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.push("/movieSheet", { id: movieId });
  };
  useEffect(() => {
    scriptFunctions.initHomeSlider();
    scriptFunctions.initParallaxSlider();
    const carouselElm = document.querySelector('.carousel');
    new HoverCarousel(carouselElm);
}, []);
  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setDetail(res.data);
        setGenres(res.data.genres);
      })
      axios.get(URL_CREDITS).then((res) => setCredits(res.data.cast));
      axios.get(URL_SIMILAR).then((res) => setSimilar(res.data.results));
      axios.get(URL_VIDEOS)
      .then((res) => {
        const trailers = res.data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailers.length > 0) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${trailers[0].key}`);
        }
      })

      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });

    scriptFunctions.updateYear();
    scriptFunctions.initReadMore();

  }, [URL, URL_CREDITS, URL_SIMILAR, URL_VIDEOS]);

  return (
    <div className='sheet'>
      <Navigation />
      <div >
        <div className="container-fluid py-5">
          <div className="row align-items-start">
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
              <img src={`http://image.tmdb.org/t/p/original${detail.poster_path}`} alt="image-film" />
            </div>
            <div className="col-12 col-md-8 actor-details">
              <h4 className="font-weight-bold py-3">{detail.title} ({detail.original_title})</h4>
              <h5 className="font-weight-bold">Release Date : {detail.release_date}</h5>
              <p className="py-3">
                <strong>Genres :</strong> {genres.map((g) => (
                <span
                  className="type"
                  key={g.id}
                  onClick={() => history.push(`/categories/${g.id}`, { id: g.id, name: g.name })}
                >
                  {g.name},&nbsp; 
                </span>
              ))}
              </p>
              <p className="py-3 biography text-justify">
                <strong>Synopsis :</strong>{detail.overview}
              </p>
              <div className="rating">
                <strong>Rating:</strong> <span className='rating'>< Rating movie={detail} /></span>
              </div>
              <div className="centerer">
                <div className="wrap">
                  <a className="btn-5" target='_blank' href={trailerUrl}>
                    See Trailer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-actors">
          <div className="carousel-title">
            <h4>Cast</h4>
          </div>
          <div className='center'>
          <div id="wrapper">
      <button className="nav-button left" onClick={scriptFunctions.handleClickGoBack}></button>
      <div id="carousel">
      {credits.map((actor, index) => (
                <div className="square" key={index}>
                  <Actor actor={actor} onClickActor={() => history.push('/actorSheet', { id: actor.id })} />
                </div>
              ))}
      </div>
      <button className="nav-button right" onClick={scriptFunctions.handleClickGoAhead}></button>
    </div>
    </div>
        </div>
        <div className="game-section">
          <div className="carousel-title">
            <h4>Similar Movies</h4>
          </div>
          <div className="carousel film">
            <div className="wrap">
              <ul>
        {similar.map((movie) => (
          <li  onClick={() => history.push("/movieSheet", {id: movie.id})}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/NoImageLogo.png'}
              alt={movie.title}
            />
            <h5>{movie.title}</h5>
          </li>
        ))}
      </ul>
      </div>
    </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieSheet;