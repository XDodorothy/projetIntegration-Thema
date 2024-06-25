
import '../styles/actorsheet.css' // Custom CSS for Navbar
import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const ActorSheet = () => {
    useEffect(() => {
      const loadScripts = async () => {
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.bundle.min.js';
        bootstrapScript.async = true;
        document.body.appendChild(bootstrapScript);
  
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
          document.body.removeChild(bootstrapScript);
          document.body.removeChild(jqueryScript);
          document.body.removeChild(owlCarouselScript);
        };
      };
  
      loadScripts();
    }, []);

  return (
    <div>
      <Navigation />
      <div className="container-fluid py-5">
        <div className="row align-items-start">
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
            <img src="actor.webp" className="img-fluid rounded actor-image" alt="Affiche du film" />
          </div>
          <div className="col-12 col-md-8 actor-details">
            <h4 className="font-weight-bold py-3">Actor's Name</h4>
            <h5 className="font-weight-bold">Personal Info :</h5>
            <p className="py-3"><strong>Known for :</strong> Acting</p>
            <p className="py-3"><strong>Known Credit :</strong> 115</p>
            <p className="py-3"><strong>Gender :</strong> Female</p>
            <p className="py-3"><strong>Birthday :</strong> April 30, 1982</p>
            <p className="py-3 biography text-justify">
              <strong>Biography :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className="py-3"><a href="#" className="read-more-link text-primary font-weight-bold">Read more ...</a></p>
            <p className="py-3 additional-text text-justify" style={{ display: 'none' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="game-section">
        <div className="carousel-title">
          <h4>Movies Playing into</h4>
        </div>
        <h4 className="line-title py-3 my-3">Known for</h4>
        <div className="owl-carousel custom-carousel owl-theme">
          <div className="item active" style={{ backgroundImage: 'url(movie1.jpg)' }}>
            <div className="item-desc">
              <h5>La Planète des Singes</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie2.jpg)' }}>
            <div className="item-desc">
              <h5>Civil War</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie3.jpg)' }}>
            <div className="item-desc">
              <h5>RDR 2</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie4.jpg)' }}>
            <div className="item-desc">
              <h5>Les Cartes du Mal</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie5.jpg)' }}>
            <div className="item-desc">
              <h5>Atlas</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie6.jpg)' }}>
            <div className="item-desc">
              <h5>The Fall Guy</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
        <h4 className="line-title py-3 my-3">Other Movies</h4>
        <div className="owl-carousel custom-carousel owl-theme">
          <div className="item active" style={{ backgroundImage: 'url(movie1.jpg)' }}>
            <div className="item-desc">
              <h5>La Planète des Singes</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie2.jpg)' }}>
            <div className="item-desc">
              <h5>Civil War</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie3.jpg)' }}>
            <div className="item-desc">
              <h5>Godzilla x Kong : Le Nouvel Empire</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie4.jpg)' }}>
            <div className="item-desc">
              <h5>Les Cartes du Mal</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie5.jpg)' }}>
            <div className="item-desc">
              <h5>Atlas</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(movie6.jpg)' }}>
            <div className="item-desc">
              <h5>The Fall Guy</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
  
  export default ActorSheet;