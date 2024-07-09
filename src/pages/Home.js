import '../styles/home.css'; 
import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import * as scriptFunctions from '../script';



const Home = () => {

  useEffect(() => {
    scriptFunctions.initHomeSlider();
    scriptFunctions.initOwlCarousel();
    scriptFunctions.initParallaxSlider();
    scriptFunctions.initCarousel();
}, []);

  return (
    <div>
      <Navigation />
      <section className="creative-parallax--slider" id="premium">
  <div className="slider-inner">
    <div className="slider-row">
      <div className="parallax-slider slider-wrap">
        <div className="swiper-wrapper">
        <div className="swiper-slide" style={{ backgroundImage: "url('movie5.jpg')" }}>
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
                  <div className="from-left">MR-9: Do or Die</div>
                  <div className="from-right">(2023)</div>
                </div>
                <div className="slide-cta">
                  <a href="https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme" className="slide-btn gradient-btn fs-5">
                    Show me more about this movie <span><i className="fa-solid fa-arrow-right"></i></span>
                  </a>
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
          </div>
          <div className="swiper-slide" style={{ backgroundImage: "url('movie1.jpg')" }}>
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
                  <div className="from-left">Bad Boys for Life</div>
                  <div className="from-right">(2020)</div>
                </div>
                <div className="slide-cta">
                  <a href="https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme" className="slide-btn gradient-btn">
                    Show me more about this movie <span><i className="fa-solid fa-arrow-right"></i></span>
                  </a>
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
          </div>
          <div className="swiper-slide" style={{ backgroundImage: "url('movie5.jpg')" }}>
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
                  <div className="from-left">Fast & Furious X</div>
                  <div className="from-right">(2023)</div>
                </div>
                <div className="slide-cta">
                  <a href="https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme" className="slide-btn gradient-btn">
                    Show me more about this movie <span><i className="fa-solid fa-arrow-right"></i></span>
                  </a>
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
          </div>
        </div>
        <div className="swiper-button-next slide-btns"></div>
        <div className="swiper-button-prev slide-btns"></div>
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
    <div>
      <span className="line-title"></span>
      <div className="owl-carousel custom-carousel owl-theme">
        <div className="item active" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>La Planète des Singes</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie2.jpg)"}}>
          <div className="item-desc">
            <h5>Civil War</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie3.jpg)"}}>
          <div className="item-desc">
            <h5>RDR 2</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>Les Cartes du Mal</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>Atlas</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>The Fall Guy</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="game-section">
    <div className="caroussel-title">
      <h5>Popular</h5>
    </div>
    <div>
      <span className="line-title"></span>
      <div className="owl-carousel custom-carousel owl-theme">
        <div className="item active" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>La Planète des Singes</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>Civil War</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie3.jpg)"}}>
          <div className="item-desc">
            <h5>RDR 2</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie3.jpg)"}}>
          <div className="item-desc">
            <h5>Les Cartes du Mal</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>Atlas</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>The Fall Guy</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="game-section">
    <div className="caroussel-title">
      <h5>For a Cuddly Night</h5>
    </div>
    <div>
      <span className="line-title"></span>
      <div className="owl-carousel custom-carousel owl-theme">
        <div className="item active" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>La Planète des Singes</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>Civil War</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item"style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>RDR 2</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>Les Cartes du Mal</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>Atlas</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="item" style={{backgroundImage: "url(movie1.jpg)"}}>
          <div className="item-desc">
            <h5>The Fall Guy</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="caroussel-actors">
    <div className="caroussel-title-actor">
      <h4 className="title-actor font-weight-bold">Popular Actors</h4>
    </div>
    <div id="wrapper">
      <button className="nav-button left" onclick="handleClickGoBack()"></button>
      <div id="carousel">
        <div className="square">
          <img src="actor1.webp" alt="Image 1"/>
          <div className="item-desc">
            <h5 className="font-weight-bold">Kirsten Dunst Lee</h5>
          </div>
        </div>
        <div className="square">
          <img src="actor2.webp" alt="Image 2"/>
          <div className="item-desc">
            <h5 className="font-weight-bold">Wagner Moura Joel</h5>
          </div>
        </div>
        <div className="square">
          <img src="actor3.webp" alt="Image 1"/>
          <div className="item-desc">
            <h5 className="font-weight-bold">Cailee Spaeny Jessi</h5>
          </div>
        </div>
        <div className="square">
          <img src="actor4.webp" alt="Image 1"/>
          <div className="item-desc">
            <h5 className="font-weight-bold">Stephen McKinley Sammy</h5>
          </div>
        </div>
        <div className="square">
          <img src="actor5.webp" alt="Image 1"/>
          <div className="item-desc">
            <h5 className="font-weight-bold">Scarlett Johansson</h5>
          </div>
        </div>
        <div className="square">
          <img src="actor6.webp" alt="Image 1"/>
          <div className="item-desc">
            <h5 className="font-weight-bold">Jason Statham</h5>
          </div>
        </div>
        <div className="square">
          <img src="actor7.webp" alt="Image 1"/>
          <div className="item-desc">
            <h5 className="font-weight-bold">Angelina Jolie</h5>
          </div>
        </div>
        <div className="square">
          <img src="actor8.webp" alt="Image 1"/>
          <div className="item-desc">
            <h5 className="font-weight-bold">Matt Damon</h5>
          </div>
        </div>
      </div>
      <button className="nav-button right" onclick="handleClickGoAhead()"></button>
    </div>
  </div>

      <Footer />
    </div>
  );
};

  
  export default Home;