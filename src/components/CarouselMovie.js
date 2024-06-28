import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../styles/actorsheet.css'; 

export class CarouselMovie extends Component {  

          render()  

          {      

            return (  
    <div>
      <div className="game-section">
        <h4 className="line-title py-3 my-3">Known for</h4>
        <OwlCarousel>
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
        </OwlCarousel>
        <h4 className="line-title py-3 my-3">Other Movies</h4>
        <OwlCarousel>
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
        </OwlCarousel>
      </div>
    </div>
  );
}};
  
  export default CarouselMovie;