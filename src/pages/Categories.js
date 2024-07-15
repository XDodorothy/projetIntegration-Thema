import '../styles/categories.css'; 
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useHistory, useParams } from "react-router-dom";
import { ThreeDots } from 'react-loading-icons';

const Categories = (props) => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [nameGenre, setNameGenre] = useState('');

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US")
      .then((res) => {
        setCategories(res.data.genres);
        const genre = res.data.genres.find(genre => genre.id.toString() === id);
        if (genre) {
          setNameGenre(genre.name);
        }
      });
  }, [id]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&with_genres=${id}&page=${page}`)
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch(() => setLoading(false));
      
    }
  }, [id, page]);

  const onClickMovie = (movie) => {
    history.push({
      pathname: '/movieSheet',
      state: { movie }
    });
  };

  function Rating({ movie }) {
    const rating = movie.vote_average / 2;
    if (rating < 1) {
      return <p className="rating">☆</p>;
    } else if (rating >= 1 && rating < 1.5) {
      return <p className="rating">⭐☆</p>;
    } else if (rating >= 1.5 && rating < 2) {
      return <p className="rating">⭐⭐</p>;
    } else if (rating >= 2 && rating < 2.5) {
      return <p className="rating">⭐⭐⭐☆</p>;
    } else if (rating >= 2.5 && rating < 3) {
      return <p className="rating">⭐⭐⭐</p>;
    } else if (rating >= 3 && rating < 3.5) {
      return <p className="rating">⭐⭐⭐⭐☆</p>;
    } else if (rating >= 3.5 && rating < 4) {
      return <p className="rating">⭐⭐⭐⭐</p>;
    } else if (rating >= 4 && rating < 4.5) {
      return <p className="rating">⭐⭐⭐⭐⭐☆</p>;
    } else {
      return <p className="rating">⭐⭐⭐⭐⭐</p>;
    }
  }

  return (
    <div>
      <Navigation />
      <div className="container-fluid" id="card">
        {loading ? (
          <div className="load">
            <ThreeDots strokeOpacity={.125} speed={.75} />
          </div>
        ) : (
          <div className="row">
          <div className="col-md-12">
            <div className="site__wrapper">
              <h3 className="mt-5 text-md-start mb-5">{nameGenre}</h3>
              <div className="grid-container">
                {data.map((movie) => (
                  <div className="grid-item" key={movie.id} onClick={() => onClickMovie(movie)}>
                    <div className="card">
                      <div className="card__image">
                        {movie.poster_path ? (
                          <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image-film" />
                        ) : (
                          <div>No Image Available</div>
                        )}
                        <div className="card__overlay">
                          <div className="card__overlay-content">
                            <ul className="list-unstyled">
                              <li className="card__title list-unstyled">{movie.title}</li>
                              <li className="card__title list-unstyled">{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</li>
                              <li className="card__title list-unstyled">{movie.runtime ? `${movie.runtime} min` : 'N/A'}</li>
                              <li><Rating movie={movie} /></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        )}
        <div className="container-xxl">
          <div className="d-flex justify-content-evenly">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link custom-link me-3" onClick={() => setPage(1)}>
                    First Page
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link custom-link me-3"
                    onClick={() => {
                      page === 1 ? window.alert("No previous page") : setPage(page - 1);
                    }}>
                    Back Page
                  </button>
                </li>
              </ul>
            </nav>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link custom-link me-3"
                    onClick={() => {
                      page === 500 ? window.alert("No next page") : setPage(page + 1);
                    }}>
                    Next Page
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link custom-link me-3" onClick={() => setPage(500)}>Last Page</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
  
  export default Categories;