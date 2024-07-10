import '../styles/search.css'; 
import React, { Fragment, useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";




const Search = () => {


  return (
    <React.Fragment className="search">
      <Navigation />
      <div className="container-fluid card-bg-color" style={{ maxWidth: '100%' }}>
    <div className="row">
      <div className="col-lg-12 text-center bg-color">
        <h5 className="font-weight-bold my-5">Search in the Movie Catalog</h5>
        <div className="search-container">
          <div className="search-bar">
            <input type="text" id="search-input" placeholder="Search by Movie Title..."/>
            <button id="search-button">Research</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4 pb-4 text-center">
      <div className="col-md-6 col-lg-4 sort-by bg-color">
      <header className="p-5">
              <div className="filters">
                <div className="mb-3 selection">
                  <label htmlFor="sort-by">Sort by</label>
                  <select id="sort-by" className="form-input">
                    <option value="popularity">Popularity</option>
                    <option value="top-rating">Top Rating</option>
                    <option value="year-published">Year Published</option>
                    <option value="trending">Trending</option>
                  </select>
                </div>
                <div className="selection mb-3">
                  <label htmlFor="start-date">Released Date</label>
                  <input type="date" id="start-date" className="form-input mb-2" />
                  <label htmlFor="end-date">End Date</label>
                  <input type="date" id="end-date" className="form-input" />
                </div>
                <div className="selection mb-3">
                  <label htmlFor="genre">Genres</label>
                  <select id="genre" className="form-input">
                    <option value="adventure">Adventure</option>
                    <option value="crime">Crime</option>
                    <option value="thriller">Thriller</option>
                    <option value="war">War</option>
                    <option value="western">Western</option>
                    <option value="science-fiction">Science Fiction</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="drama">Drama</option>
                    <option value="romance">Romance</option>
                    <option value="history">History</option>
                    <option value="comedy">Comedy</option>
                    <option value="animation">Animation</option>
                    <option value="documentary">Documentary</option>
                    <option value="family">Family</option>
                    <option value="music">Music</option>
                    <option value="tv-movie">TV Movie</option>
                    <option value="action">Action</option>
                  </select>
                </div>
                <div className="mb-3 selection">
                  <label htmlFor="age">Age</label>
                  <select id="age" className="form-input">
                    <option value="children">Children</option>
                    <option value="teenager">Teenager</option>
                    <option value="adult">Adult</option>
                  </select>
                </div>
                <div className="selection mb-3">
                  <label htmlFor="user-rating">User Rating </label>
                  <input id="user-rating" className="form-input" type="number" min="0" max="10" step="0.1" placeholder="Minimum rating" />
                </div>
                <div className="selection mb-3">
                  <label htmlFor="vote-count">Min. Number of Votes </label>
                  <input type="number" id="vote-count" min="0" placeholder="Minimum vote" className="form-input" />
                </div>
                <div className="selection mb-3">
                  <label htmlFor="runtime">Select Duration</label>
                  <select id="runtime" className="form-input">
                    <option value="75">Any Duration</option>
                    <option value="75">75 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="105">105 minutes</option>
                    <option value="120">120 minutes</option>
                    <option value="135">135 minutes</option>
                    <option value="150">150 minutes</option>
                    <option value="165">165 minutes</option>
                    <option value="180">180 minutes</option>
                    <option value="195">195 minutes</option>
                    <option value="210">210 minutes</option>
                    <option value="225">225 minutes</option>
                    <option value="240">240 minutes</option>
                    <option value="255">255 minutes</option>
                    <option value="270">270 minutes</option>
                    <option value="285">285 minutes</option>
                    <option value="300">300 minutes</option>
                    <option value="315">315 minutes</option>
                    <option value="330">330 minutes</option>
                    <option value="345">345 minutes</option>
                    <option value="360">360 minutes</option>
                    <option value="any-duration">Any duration</option>
                  </select>
                </div>
                <div className="centerer">
                  <div className="wrap">
                    <a className="btn-5" href="#">
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            </header>
      </div>
      <div className="col-md-6 col-lg-8 card-bg-color">
        <div>
          <h5 className="font-weight-bold">Movies Containing War</h5>
        </div>
        <div className="site__wrapper">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie1.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie2.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie3.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid " style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie4.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie1.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie2.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie3.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie4.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie1.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie2.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie3.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie4.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie1.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie2.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie3.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12">
              <div className="grid" style={{ width: '100%' }}>
                <div className="card">
                  <div className="card__image">
                    <img src="movie4.jpg" alt=""/>
                    <div className="card__overlay card__overlay--blue">
                      <div className="card__overlay-content">
                        <ul className="card__meta card__title">
                          <li><a href="#0"><i className="fa fa-clock-o"></i>Year</a></li>
                          <li><a href="#0"><i className="fa fa-clock-o"></i> Duration</a></li>
                        </ul>
                        <a href="#0" className="card__title">Film Title</a>
                        <ul className="card__meta card__meta--last card__title">
                          <li><a href="#0">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a></li>
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
                  <a className="page-link custom-link me-3" href="#" aria-label="First">
                    First Page
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link custom-link" href="#" aria-label="Previous">
                    Back Page
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link custom-link me-3" href="#" aria-label="Next">
                    Next Page
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link custom-link" href="#" aria-label="Last">
                    Last Page
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Footer />
      </React.Fragment>
  );
};

  
  export default Search;