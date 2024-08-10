import '../styles/sheet.css'; 
import '../styles/styles.css'; 
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import * as scriptFunctions from '../script';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';

const ActorSheet = (props) => {
  const id = props.location.state.id;
  const URL = `https://api.themoviedb.org/3/person/${id}?api_key=96c53f5c4eea872e1526092d2ea94b36&language=en-US`;

  const [detail, setDetail] = useState({});
  const [knownForMovies, setKnownForMovies] = useState([]);
  const [otherMovies, setOtherMovies] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setDetail(res.data);
        setKnownForMovies(res.data.known_for);
        setOtherMovies(res.data.credits ? res.data.credits.cast : []);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });

    scriptFunctions.initCarousel();
    scriptFunctions.updateYear();
    scriptFunctions.initReadMore();
  }, [URL]);

  return (
    <div className='sheet'>
      <Navigation />
      <div className="container-fluid py-5">
        <div className="row align-items-start">
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
          {detail.profile_path ? (
                            <img src={`http://image.tmdb.org/t/p/original${detail.profile_path}`} alt="image-actor" />
                          ) : (
                            <img src='/NoImageLogo.png' alt='image-film' />
                          )}
          </div>
          <div className="col-12 col-md-8 actor-details">
          <h4 className="font-weight-bold py-3">{detail.name}</h4>
              <h5 className="font-weight-bold">Personal Info :</h5>
              <p className="py-3"><strong>Known for :</strong> {detail.known_for_department}</p>
              <p className="py-3"><strong>Birthday :</strong> {detail.birthday}</p>
              <p className="py-3"><strong>Place of birth :</strong> {detail.place_of_birth}</p>
              <p className="py-3 biography text-justify">{detail.biography}</p>
              <p className="py-3"><a href="#" className="read-more-link font-weight-bold">Read more ...</a></p>
              <p className="py-3 additional-text text-justify" style={{ display: 'none' }}>
                {detail.biography}
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