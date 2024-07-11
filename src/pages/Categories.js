import '../styles/categories.css'; 
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useHistory, useParams  } from "react-router-dom";




const Categories = (props) => {

  const history = useHistory(); // quand cela va se faire ? Quand tu clique sur un film
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]); // const pour recupérer les donner en tableau []
  const [data, setData] = useState ([]);
   const { id } = useParams(); // Récupère l'id du genre à partir des paramètres de la route
   const [nameGenre, setNameGenre] = useState(''); 

   useEffect(() => {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US")
    .then((res) => {
      setCategories(res.data.genres);
      // Trouver le nom du genre correspondant à l'id
      const genre = res.data.genres.find(genre => genre.id.toString() === id);
      if (genre) {
        setNameGenre(genre.name);
      }
    });
}, [id]);
  useEffect(() => {
    if (id) {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&with_genres=${id}`)
        .then((res) => setData(res.data.results));
    }
  }, [id]);

const onClickMovie = (movie) => {
  history.push({
    pathname: '/movieSheet',
    state: { movie }
  });
};



  return (
    <div>
      <Navigation />
      <div className="container-fluid" id="card">
    <div className="row">
      <div className="col-md-12">
        <div className="site__wrapper">
        <h3 className="mt-5 text-md-start mb-5">{nameGenre}</h3>
          <div className="grid">
          {data.map((movie) => (
  <div className="card" key={movie.id} onClick={() => onClickMovie(movie)}>
    <div className="card__image">
      {movie.poster_path ? (
        <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image-film" />
      ) : (
        <div>No Image Available</div>
      )}
      <div className="card__overlay">
        <div className="card__overlay-content">
          <ul className="list-unstyled">
            <li><a href="#0" className="card__title list-unstyled">{movie.title}</a></li>
            <li><a href="#0" className="card__title list-unstyled">{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</a></li>
            <li><a href="#0" className="card__title list-unstyled">{movie.runtime ? `${movie.runtime} min` : 'N/A'}</a></li>
            <li><a className="rating">⭐⭐⭐⭐</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
))}
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
               First Page</button>
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