import '../styles/categories.css'; 
import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import * as scriptFunctions from '../script';



const Categories = () => {



  return (
    <div>
      <Navigation />
      <div className="container-fluid" id="card">
    <div className="row">
      <div className="col-md-12">
        <div className="site__wrapper">
          <h3 className="mt-5 text-md-start mb-5">action</h3>
          <div className="grid">
            <div className="card">
              <div className="card__image">
                <img src="movie1.jpg" alt="" />
                <div className="card__overlay">
                  <div className="card__overlay-content">
                    <ul className="list-unstyled">
                      <li><a href="#0" className="card__title list-unstyled">Civil War</a></li>
                      <li><a href="#0" className="card__title list-unstyled">Year</a></li>
                      <li><a href="#0" className="card__title list-unstyled">Duration</a></li>
                      <li><a className="rating">⭐⭐⭐⭐</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card__image">
              <a href="#0"><img src="movie1.jpg" alt=""/></a>
                <div className="card__overlay">
                  <div className="card__overlay-content">
                    <ul className="list-unstyled">
                      <li><a href="#0" className="card__title">Civil War</a></li>
                      <li><a href="#0" className="card__title">Year</a></li>
                      <li><a href="#0" className="card__title">Duration</a></li>
                      <li><a className="rating">⭐⭐⭐⭐</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card__image">
              <a href="#0"><img src="movie2.jpg" alt=""/></a>
                <div className="card__overlay">
                  <div className="card__overlay-content">
                    <ul className="list-unstyled">
                      <li><a href="#0" className="card__title">Civil War</a></li>
                      <li><a href="#0" className="card__title">Year</a></li>
                      <li><a href="#0" className="card__title">Duration</a></li>
                      <li><a className="rating">⭐⭐⭐⭐</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card__image">
              <a href="#0"><img src="movie4.jpg" alt=""/></a>
                <div className="card__overlay">
                  <div className="card__overlay-content">
                    <ul className="list-unstyled">
                      <li><a href="#0" className="card__title">Civil War</a></li>
                      <li><a href="#0" className="card__title">Year</a></li>
                      <li><a href="#0" className="card__title">Duration</a></li>
                      <li><a className="rating">⭐⭐⭐⭐</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card__image">
              <a href="#0"><img src="movie1S.jpg" alt=""/></a>
                <div className="card__overlay">
                  <div className="card__overlay-content">
                    <ul className="list-unstyled">
                      <li><a href="#0" className="card__title">Civil War</a></li>
                      <li><a href="#0" className="card__title">Year</a></li>
                      <li><a href="#0" className="card__title">Duration</a></li>
                      <li><a className="rating">⭐⭐⭐⭐</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card__image">
                <img src="movie2.jpg" alt=""/>
                <div className="card__overlay">
                  <div className="card__overlay-content">
                    <ul className="list-unstyled">
                      <li><a href="#0" className="card__title">Civil War</a></li>
                      <li><a href="#0" className="card__title">Year</a></li>
                      <li><a href="#0" className="card__title">Duration</a></li>
                      <li><a className="rating">⭐⭐⭐⭐</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card__image">
              <a href="#0"><img src="movie3.jpg" alt=""/></a>
                <div className="card__overlay">
                  <div className="card__overlay-content">
                    <ul className="list-unstyled">
                      <li><a href="#0" className="card__title">Civil War</a></li>
                      <li><a href="#0" className="card__title">Year</a></li>
                      <li><a href="#0" className="card__title">Duration</a></li>
                      <li><a className="rating">⭐⭐⭐⭐</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card__image">
              <a href="#0"><img src="movie4.jpg" alt=""/></a>
                <div className="card__overlay">
                  <div className="card__overlay-content">
                    <ul className="list-unstyled">
                      <li><a href="#0" className="card__title">Civil War</a></li>
                      <li><a href="#0" className="card__title">Year</a></li>
                      <li><a href="#0" className="card__title">Duration</a></li>
                      <li><a className="rating">⭐⭐⭐⭐</a>
                      </li>
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
      <Footer />
    </div>
  );
};

  
  export default Categories;