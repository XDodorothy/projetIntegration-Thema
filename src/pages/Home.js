import '../styles/styles.css'; 
import '../styles/home.css'; 
import React, { useState, useEffect, useRef }from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Nav from "../components/Navigation";
import Actor from "../components/Actor";
import * as scriptFunctions from '../script';
import { Navigation, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from "react-router-dom";
import HoverCarousel from '../script';




const Home = () => {

  useEffect(() => {
    scriptFunctions.initHomeSlider();
    scriptFunctions.initParallaxSlider();
    // Initialize carousels
    if (trendingRef.current) new HoverCarousel(trendingRef.current);
    if (popularRef.current) new HoverCarousel(popularRef.current);
    if (romanceRef.current) new HoverCarousel(romanceRef.current);
}, []);

const history = useHistory();
const trendingRef = useRef(null);
const popularRef = useRef(null);
const romanceRef = useRef(null);
const URL_Trending = `https://api.themoviedb.org/3/trending/movie/day?api_key=166b9170e2b5bafde803f3f96ee6f452&page=1`;
const URL_Romance = `https://api.themoviedb.org/3/discover/movie?&language=en-US&page=1&sort_by=popularity.desc&api_key=166b9170e2b5bafde803f3f96ee6f452&with_genres=10749`;
const URL_Actor = `https://api.themoviedb.org/3/person/popular?api_key=166b9170e2b5bafde803f3f96ee6f452&language=en-US&page=1`;
const URL_Popular = `https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1`;
const URL_Top = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&api_key=166b9170e2b5bafde803f3f96ee6f452&page=1`;
const [actor, setActor] = useState([]); // actor popular
const [popular, setPopular] = useState([]); // popular movies
const [romance, setRomance] = useState([]); // romance movies
const [trending, setTrending] = useState([]); // trending movies
const [top, setTop] = useState([]); // top movies



useEffect(() => {

    axios.get(URL_Actor).then((res) => setActor(res.data.results));
    axios.get(URL_Trending).then((res) => setTrending(res.data.results));
    axios.get(URL_Popular).then((res) => setPopular(res.data.results));
    axios.get(URL_Romance).then((res) => setRomance(res.data.results));
    axios.get(URL_Top).then((res) => setTop(res.data.results.slice(0,3)))

    .catch((error) => {
      console.error("Erreur lors de la récupération des données :", error);
    });
  scriptFunctions.updateYear();
  scriptFunctions.initReadMore();
}, [URL_Actor, URL_Popular, URL_Romance, URL_Trending, URL_Top]);

const handleRedirect = (id) => {
  history.push('/movieSheet', { id });
};
  return (
    <div>
      <Nav />
      <section className="creative-parallax--slider" id="premium">
            <div className="slider-inner">
                <div className="slider-row">
                    <div className="parallax-slider slider-wrap">
                        <Swiper
                            navigation
                            autoplay={{ delay: 5000 }}
                            modules={[Navigation, Autoplay]}
                            className="swiper-wrapper"
                        >
                           {top.map((movie, index) => (
                            
                            <SwiperSlide
                                className="swiper-slide"
                                key={index}
                                style={{ backgroundImage: `url(${
                                  movie.backdrop_path
                                    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                                    : '/NoImageLogo.png'
                                })`,
                              }}
                            >
                             
                               <div className="swiper-slide--inner">
              <div className="slide--bg">
                <div className="slide-bg--inner"></div>
              </div>
              <div className="slide-detail">
                <div className="slide-main--subheading">
                  <img src="logo.png" alt="Théma-logo" width="200" className="mb-3" />
                  <span className="fs-5 font-weight-bold">
                    <br />WELCOME to ThéMa !<br />
                    Your Best Movie Catalog... What's on at Your Home !
                  </span>
                </div>
                <div className="slide-main--heading py-5">
                  <div className="from-left">{movie.title}</div>
                  <div className="from-right">({movie.release_date.split('-')[0]})</div>
                </div>
                <div className="slide-cta">
                <button 
                          onClick={() => handleRedirect(movie.id)} 
                          className="slide-btn gradient-btn fs-5"
                        >
                    Show me more about this movie <span><i className="fa-solid fa-arrow-right"></i></span>
                  </button>
                </div>
                <div className="slide-badge">
                  <span className="patch-check">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638l-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89l-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622l-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01l.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637l.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89l.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622l.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"
                      />
                    </svg>
                  </span>
                  <span className="badge-heading">Top Rated Movie</span>
                </div>
              </div>
            </div>
                            </SwiperSlide>
                              ))}
                        </Swiper>
                       
                        <div className="autoplay-progress">
                            <div className="progress-fill"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  <div className="game-section pt-5">
    <div className="caroussel-title">
      <h5>Trending</h5>
    </div>
    <div className="carousel film"  ref={trendingRef}>
    <div className="wrap">
      <ul>
        {trending.map((movie) => (
          <li  onClick={() => history.push("/movieSheet", {id: movie.id})}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/NoImageLogo.png'}
              alt={movie.title}
            />
            <h5>{movie.title}</h5>
          </li>
        ))}
      </ul>
      </div>
    </div>
  </div>
  <div className="game-section pt-5">
  <div className="caroussel-title">
    <h5>Popular</h5>
  </div>
  <div className="carousel film "  ref={popularRef}>
    <div className="wrap ">
      <ul>
        {popular.map((movie) => (
          <li onClick={() => history.push("/movieSheet", {id: movie.id})}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/NoImageLogo.png'}
              alt={movie.title}
            />
            <h5>{movie.title}</h5>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
  <div className="game-section pb-5">
    <div className="caroussel-title">
      <h5>For a Cuddly Night</h5>
    </div>
   
    <div className="carousel film "  ref={romanceRef}>
    <div className="wrap">
      <ul>
        {romance.map((movie) => (
          <li  onClick={() => history.push("/movieSheet", {id: movie.id})}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/NoImageLogo.png'}
              alt={movie.title}
            />
            <h5>{movie.title}</h5>
          </li>
        ))}
      </ul>
      </div>
    </div>
   
  </div>
  <div className="caroussel-actors">
    <div className="caroussel-title-actor">
      <h4 className="title-actor font-weight-bold text-center">Popular Actors</h4>
    </div>
    <div id="wrapper">
      <button className="nav-button left" onClick={scriptFunctions.handleClickGoBack}></button>
      <div id="carousel">
      {actor.map((actor, index) => (
                <div className="square" key={index}>
                  <Actor actor={actor} onClickActor={() => history.push('/actorSheet', { id: actor.id })} />
                </div>
              ))}
      </div>
      <button className="nav-button right" onClick={scriptFunctions.handleClickGoAhead}></button>
    </div>
  </div>

      <Footer />
    </div>
  );
};

  
  export default Home;