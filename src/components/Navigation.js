import '../styles/Navbar.css'; // Custom CSS for Navbar
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as scriptFunctions from '../script';
import { NavLink, useHistory } from "react-router-dom";

const Navigation = (props) => {
  useEffect(() => {
    scriptFunctions.initNavbarScroll();
  }, []);
  const history = useHistory();
  const [categories, setCategories] = useState([]); // const pour recupérer les donner en tableau []
  const [keyword, setKeyword] = useState ();

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US")
      .then((res) => setCategories(res.data.genres));
  }, []);

  const onSearch = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (keyword.trim()) /*enlever les espaces au début et à la fin et éviter des erreurs*/ {
      history.push(`/search/?page=1&keyword=${encodeURIComponent(keyword)}`);
    }
  }
  return (
    <div className="navbar mt-5">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid navbar-container mx-auto">
          <h4>
            <NavLink activeClassName="nav-active" className="navbar-brand" style={{ color: '#D7BE82' }} exact to='/'>
              ThéMa {/*Titre apparaissant sur le menu*/}
            </NavLink>
          </h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Movies
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                  <li><a className="dropdown-item" href="#">Action & Adventure</a></li>
                  <li>
                    {categories.filter(genre => genre.id === 28).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 12).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 80).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 53).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 10752).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 37).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                </ul>
                <ul>
                  <li><a className="dropdown-item" href="#">Science Fiction & Fantasy</a></li>
                  <li>
                    {categories.filter(genre => genre.id === 878).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 14).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 27).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                </ul>
                <ul>
                  <li><a className="dropdown-item" href="#">Drama & Romance</a></li>
                  <li>
                    {categories.filter(genre => genre.id === 18).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 10749).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 36).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                </ul>
                <ul>
                  <li><a className="dropdown-item" href="#">Various</a></li>
                  <li>
                    {categories.filter(genre => genre.id === 35).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 16).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 99).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 10751).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 9648).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 10402).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                  <li>
                    {categories.filter(genre => genre.id === 10770).map((genre) => (
                      <NavLink 
                        key={genre.id} 
                        className='dropdown-item' 
                        to={`/categories/${genre.id}/?page=1`} 
                      >
                        {genre.name}
                      </NavLink>
                    ))}
                  </li>
                </ul>
                </div>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="nav-active" className="nav-link text-uppercase" exact to='/actorList/?page=1'>
                  Actors {/*Titre apparaissant sur le menu*/}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="nav-active" className="nav-link text-uppercase" exact to='/search'>
                  Search {/*Titre apparaissant sur le menu*/}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="nav-active" className="nav-link text-uppercase" exact to='/about'>
                  About {/*Titre apparaissant sur le menu*/}
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={onSearch}>
              <input className="form-control me-2 custom-placeholder" 
              type="search" 
              placeholder="Search" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)} /*mise à jour du mot*/ 
              aria-label="Search" />
              <button className="btn btn-outline-light custom-button" type="submit">
                <i className="fa-solid fa-magnifying-glass" style={{ color: '#d4c087' }}></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
