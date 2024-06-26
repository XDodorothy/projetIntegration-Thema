import '../styles/moviesheet.css'; // Custom CSS for Navbar
import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const MovieSheet = () => {
    const handleClickGoBack = () => {
        // Code pour gérer le clic sur le bouton gauche
      };
    
      const handleClickGoAhead = () => {
        // Code pour gérer le clic sur le bouton droit
      };
  useEffect(() => {
    const loadScripts = async () => {
      const jqueryScript = document.createElement('script');
      jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js';
      jqueryScript.async = true;
      document.body.appendChild(jqueryScript);

      const owlCarouselScript = document.createElement('script');
      owlCarouselScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
      owlCarouselScript.async = true;
      document.body.appendChild(owlCarouselScript);

      jqueryScript.onload = () => {
        window.$ = window.jQuery;
        owlCarouselScript.onload = () => {
          window.$('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
              0: { items: 1 },
              600: { items: 3 },
              1000: { items: 5 }
            }
          });
        };
      };


      return () => {
        document.body.removeChild(jqueryScript);
        document.body.removeChild(owlCarouselScript);
      };
    };

    loadScripts();

    // Add event listener for read more button
    const readMoreButton = document.querySelector('.read-more-link');
    if (readMoreButton) {
      readMoreButton.addEventListener('click', (e) => {
        e.preventDefault();
        const additionalText = document.querySelector('.additional-text');
        if (additionalText) {
          additionalText.style.display = 'block';
          readMoreButton.style.display = 'none';
        }
      });
    }

  }, []);

  return (
    <div>
      <Navigation />
      <div>
      <div className="container-fluid py-5">
        <div className="row align-items-start">
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
            <img
              src="4V06xpCUesnzXvkQav1q3RRlwxh.jpg"
              className="img-fluid rounded actor-image"
              alt="Affiche du film"
            />
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
          <button className="nav-button left" onClick={handleClickGoBack}></button>
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
          <button className="nav-button right" onClick={handleClickGoAhead}></button>
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