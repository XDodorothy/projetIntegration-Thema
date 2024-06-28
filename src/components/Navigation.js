
import '../styles/Navbar.css' // Custom CSS for Navbar
import React, { useEffect } from 'react';
import * as scriptFunctions from '../script';

const Navbar = () => {
  useEffect(() => {
    scriptFunctions.initNavbarScroll();
  }, []);
  
    return (
      <div className="navbar-offset">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
          <div className="container-fluid navbar-container mx-auto">
            <h4><a className="navbar-brand" href="#" style={{ color: '#D7BE82' }}>ThéMa</a></h4>
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
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Adventure</a></li>
                      <li><a className="dropdown-item" href="#">Crime</a></li>
                      <li><a className="dropdown-item" href="#">Thriller</a></li>
                      <li><a className="dropdown-item" href="#">War</a></li>
                      <li><a className="dropdown-item" href="#">Western</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Science Fiction & Fantasy</a></li>
                      <li><a className="dropdown-item" href="#">Science Fiction</a></li>
                      <li><a className="dropdown-item" href="#">Fantasy</a></li>
                      <li><a className="dropdown-item" href="#">Horror</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Drama & Romance</a></li>
                      <li><a className="dropdown-item" href="#">Drama</a></li>
                      <li><a className="dropdown-item" href="#">Romance</a></li>
                      <li><a className="dropdown-item" href="#">History</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Various</a></li>
                      <li><a className="dropdown-item" href="#">Comedy</a></li>
                      <li><a className="dropdown-item" href="#">Animation</a></li>
                      <li><a className="dropdown-item" href="#">Documentary</a></li>
                      <li><a className="dropdown-item" href="#">Family</a></li>
                      <li><a className="dropdown-item" href="#">Mystery</a></li>
                      <li><a className="dropdown-item" href="#">Music</a></li>
                      <li><a className="dropdown-item" href="#">TV Movie</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase" href="#">Actors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase" href="#">About</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2 custom-placeholder" type="search" placeholder="Research" aria-label="Search" />
                <button className="btn btn-outline-light custom-button" type="submit">
                  <i className="fa-solid fa-magnifying-glass" style={{ color: '#d4c087' }}></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
  
  export default Navbar;