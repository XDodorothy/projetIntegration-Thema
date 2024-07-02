import '../styles/actorsheet.css'; 
import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import * as scriptFunctions from '../script';
//import CarouselMovie from '../components/CarouselMovie';


const ActorSheet = () => {
  useEffect(() => {
    scriptFunctions.initCarousel();
    scriptFunctions.updateYear();
    scriptFunctions.initReadMore();
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
              popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and plus
              récemment avec des logiciels de publication assistée par ordinateur comme Aldus PageMaker y compris
              des versions de Lorem Ipsum.
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