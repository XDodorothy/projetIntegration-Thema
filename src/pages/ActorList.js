import '../styles/actorlist.css'; 
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useHistory, useParams } from "react-router-dom";
import { ThreeDots } from 'react-loading-icons';




const ActorList = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [nameGenre, setNameGenre] = useState('');



  useEffect(() => {
 
      setLoading(true);
      axios.get(`https://api.themoviedb.org/3/person/popular?api_key=166b9170e2b5bafde803f3f96ee6f452&language=en-US&page=${page}`)
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })

  }, [page]);

  const onClickMovie = (actor) => {
    history.push({
      pathname: '/actorSheet',
      state: { actor }
    });
  };
    return (
      <div>
        <Navigation />
        <div className="container-fluid" id="card">
          <div className="row">
            <div className="col-md-12">
              <div className="site__wrapper">
                <h3 className="mt-5 text-md-start mb-5">Popular Actors</h3>
                <div className="grid-container">
                {data.map((actor) => (
                <div className="grid-item" key={actor.id} onClick={() => onClickMovie(actor)}>
                  <div className="card">
                    <div className="card__image">
                    {actor.profile_path ? (
                          <img src={`http://image.tmdb.org/t/p/original${actor.profile_path}`} alt="image-actor" />
                        ) : (
                          <div>No Image Available</div>
                        )}
                      <div className="card__overlay">
                        <div className="card__overlay-content">
                          <ul className="list-unstyled">
                          <li className="card__title list-unstyled">{actor.original_name}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
                </div>
                <div className="grid">
                  <div className="card">
                    <div className="card__image">
                      <img src="actor2.webp" alt="" />
                      <div className="card__overlay">
                        <div className="card__overlay-content">
                          <ul className="list-unstyled">
                            <li><a href="#0" className="card__title list-unstyled">Name</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="card">
                    <div className="card__image">
                      <img src="actor3.webp" alt="" />
                      <div className="card__overlay">
                        <div className="card__overlay-content">
                          <ul className="list-unstyled">
                            <li><a href="#0" className="card__title list-unstyled">Name</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="card">
                    <div className="card__image">
                      <img src="actor4.webp" alt="" />
                      <div className="card__overlay">
                        <div className="card__overlay-content">
                          <ul className="list-unstyled">
                            <li><a href="#0" className="card__title list-unstyled">Name</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="card">
                    <div className="card__image">
                      <img src="actor5.webp" alt="" />
                      <div className="card__overlay">
                        <div className="card__overlay-content">
                          <ul className="list-unstyled">
                            <li><a href="#0" className="card__title list-unstyled">Name</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="card">
                    <div className="card__image">
                      <img src="actor6.webp" alt="" />
                      <div className="card__overlay">
                        <div className="card__overlay-content">
                          <ul className="list-unstyled">
                            <li><a href="#0" className="card__title list-unstyled">Name</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="card">
                    <div className="card__image">
                      <img src="actor7.webp" alt="" />
                      <div className="card__overlay">
                        <div className="card__overlay-content">
                          <ul className="list-unstyled">
                            <li><a href="#0" className="card__title list-unstyled">Name</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="card">
                    <div className="card__image">
                      <img src="actor8.webp" alt="" />
                      <div className="card__overlay">
                        <div className="card__overlay-content">
                          <ul className="list-unstyled">
                            <li><a href="#0" className="card__title list-unstyled">Name</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  
  export default ActorList;