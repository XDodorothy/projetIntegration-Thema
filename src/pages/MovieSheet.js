import '../styles/sheet.css';
import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import * as scriptFunctions from '../script';
import { useLocation } from 'react-router-dom';



const MovieSheet = () => {
  const movie = location.state.movie;
  const location = useLocation();
  useEffect(() => {
    scriptFunctions.initCarousel();
    scriptFunctions.updateYear();
    scriptFunctions.initReadMore();
  }, []);

  return (
    <div className='sheet'>
      <Navigation />
      <div >
        <div className="container-fluid py-5">
          <div className="row align-items-start">
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
              <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image-film" />
            </div>
            <div className="col-12 col-md-8 actor-details">
              <h4 className="font-weight-bold py-3">Civil War (Civil War)</h4>
              <h5 className="font-weight-bold">Personal Info :</h5>
              <p className="py-3">
                <strong>Known for :</strong> Acting
              </p>
              <p className="py-3">
                <strong>Known Credit :</strong> 115
              </p>
              <p className="py-3">
                <strong>Gender :</strong> Female
              </p>
              <p className="py-3">
                <strong>Birthday :</strong> April 30, 1982
              </p>
              <p className="py-3 biography text-justify">
                <strong>Biography :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="rating">
                <strong>Note:</strong> ⭐⭐⭐⭐☆
              </div>
              <div className="centerer">
                <div className="wrap">
                  <a className="btn-5" href="#">
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
          <div id="wrapper">
            <button className="nav-button left" onClick={scriptFunctions.handleClickGoBack}></button>
            <div id="carousel">
              {['actor1.webp', 'actor2.webp', 'actor3.webp', 'actor4.webp', 'actor5.webp', 'actor6.webp', 'actor7.webp', 'actor8.webp'].map((src, index) => (
                <div className="square" key={index}>
                  <img src={src} alt={`Image ${index + 1}`} />
                  <div className="item-desc">
                    <h5 className="font-weight-bold">{['Kirsten Dunst Lee', 'Wagner Moura Joel', 'Cailee Spaeny Jessi', 'Stephen McKinley Sammy', 'Scarlett Johansson', 'Jason Statham', 'Angelina Jolie', 'Matt Damon'][index]}</h5>
                  </div>
                </div>
              ))}
            </div>
            <button className="nav-button right" onClick={scriptFunctions.handleClickGoAhead}></button>
          </div>
        </div>
        <div className="game-section">
          <div className="carousel-title">
            <h4>Similar Movies</h4>
          </div>
          <div>
            <h2 className="line-title"></h2>
            <div className="owl-carousel custom-carousel owl-theme">
              {['movie1.jpg', 'movie2.jpg', 'movie3.jpg', 'movie4.jpg', 'movie5.jpg', 'movie6.jpg'].map((src, index) => (
                <div className="item active" style={{ backgroundImage: `url(${src})` }} key={index}>
                  <div className="item-desc">
                    <h5>{['La Planète des Singes', 'Civil War', 'RDR 2', 'Les Cartes du Mal', 'Atlas', 'The Fall Guy'][index]}</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieSheet;