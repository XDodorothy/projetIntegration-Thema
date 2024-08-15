import '../styles/sheet.css'; 
import '../styles/styles.css'; 
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import * as scriptFunctions from '../script';
import HoverCarousel from '../script';
import Actor from "../components/Actor";
import { useHistory } from "react-router-dom";

const ActorSheet = (props) => {

  const history = useHistory();
  const id = props.location.state.id;
  const movieRef = useRef(null);
  const otherRef = useRef(null);
  
  const URL = `https://api.themoviedb.org/3/person/${id}?api_key=166b9170e2b5bafde803f3f96ee6f452&language=en-US`;
  const URL_Known = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=96c53f5c4eea872e1526092d2ea94b36&language=en-US`;
  const URL_other = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=96c53f5c4eea872e1526092d2ea94b36&language=en-US`;
  
  const [detail, setDetail] = useState({});
  const [knownForMovies, setKnownForMovies] = useState([]);
  const [other, setOther] = useState([]);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    
    axios.get(URL)
      .then((res) => setDetail(res.data))
      .catch((error) => console.error("Erreur lors de la récupération des détails de l'acteur :", error));
    
    axios.get(URL_Known)
      .then((res) => setKnownForMovies(res.data.cast || []))
      .catch((error) => console.error("Erreur lors de la récupération des crédits cinéma :", error));
    
    axios.get(URL_other)
      .then((res) => setOther(res.data.cast || []))
      .catch((error) => console.error("Erreur lors de la récupération des crédits other :", error));

    scriptFunctions.updateYear();
    scriptFunctions.initReadMore();
    
  }, [URL, URL_Known, URL_other]);

  useEffect(() => {
    // Initialize carousels after the knownForMovies and other data have been loaded
    if (movieRef.current && knownForMovies.length > 0) {
      new HoverCarousel(movieRef.current);
    }
    if (otherRef.current && other.length > 0) {
      new HoverCarousel(otherRef.current);
    }
  }, [knownForMovies, other]);

  return (
    <div className='sheet'>
      <Navigation />
      <div className="container-fluid py-5">
        <div className="row align-items-start">
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
          {detail.profile_path ? (
                            <img src={`http://image.tmdb.org/t/p/original${detail.profile_path}`} alt="image-actor" />
                          ) : (
                            <img src='/NoImageLogo.png' alt='image-film' />
                          )}
          </div>
          <div className="col-12 col-md-8 actor-details">
          <h4 className="font-weight-bold py-3">{detail.name}</h4>
              <h5 className="font-weight-bold">Personal Info :</h5>
              <p className="py-3"><strong>Known for :</strong> {detail.known_for_department}</p>
              <p className="py-3"><strong>Birthday :</strong> {detail.birthday}</p>
              <p className="py-3"><strong>Place of birth :</strong> {detail.place_of_birth}</p>
              <p className="py-3 biography text-justify">{detail.biography}</p>
              <p className="py-3"><a href="#" className="read-more-link font-weight-bold">Read more ...</a></p>
              <p className="py-3 additional-text text-justify" style={{ display: 'none' }}>
                {detail.biography}
              </p>
          </div>
        </div>
      </div>
      <div className="game-section">
        <div className="carousel-title">
          <h4>Playing into</h4>
        </div>
        <h4 className="line-title py-3 my-3">Moives</h4>
          <div className="carousel film" ref={movieRef}>
            <div className="wrap">
              <ul>
        {knownForMovies.map((movie) => (
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
        <h4 className="line-title py-3 my-3">Other Movies</h4>
          <div className="carousel film" ref={otherRef}>
            <div className="wrap">
              <ul>
        {other.map((movie) => (
          <li  onClick={() => history.push("/movieSheet", {id: movie.id})}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/NoImageLogo.png'}
              alt={movie.original_title}
            />
            <h5>{movie.original_title}</h5>
          </li>
        ))}
      </ul>
      </div>
    </div>
 
      </div>
      <div className="carousel-actors">
          <div className="carousel-title trick">
            <h4></h4>
          </div>

        </div>

      <Footer />
    </div>
  );
};

  
  export default ActorSheet;