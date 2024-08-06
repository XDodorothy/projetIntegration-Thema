import '../styles/categories.css'; 
import '../styles/styles.css'; 
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { ThreeDots } from 'react-loading-icons';
import { Rating } from '../script';

const Categories = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pageParam = queryParams.get('page');
  const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
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
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Réinitialiser la page à 1 lors du changement de genre
      setPage(1);
      history.push(`/categories/${id}?page=1`);

      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&with_genres=${id}&page=1`)
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id, history]);
  useEffect(() => {
    if (id) {
      setLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  const updatePage = (newPage) => {
    setPage(newPage);
    history.push(`/categories/${id}?page=${newPage}`);
  };

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
                            <img src='/NoImageLogo.png' alt='image-film' />
                          )}
                          <div className="card__overlay">
                            <div className="card__overlay-content">
                              <ul className="list-unstyled">
                                <li className="card__title list-unstyled">{movie.title}</li>
                                <li className="card__title list-unstyled">{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</li>
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
                  <button className="page-link custom-link me-3" onClick={() => updatePage(1)}>
                    First Page
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link custom-link me-3"
                    onClick={() => {
                      if (page === 1) {
                        window.alert("No previous page");
                      } else {
                        updatePage(page - 1);
                      }
                    }}>
                    {page === 1 ? <><i className="fa-solid fa-xmark"></i> </> : <>{page - 1} <i className="fa-solid fa-arrow-left"></i> </>}
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
                      if (page === 500) {
                        window.alert("No next page");
                      } else {
                        updatePage(page + 1);
                      }
                    }}>
                    Next Page
                    {page === 500 ?<> <i className="fa-solid fa-xmark"></i></>: <> <i className="fa-solid fa-arrow-right"></i>  {page + 1}</>}
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link custom-link me-3" onClick={() => updatePage(500)}>Last Page</button>
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
