import '../styles/about.css'; 
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useHistory } from 'react-router-dom';




const Apropos = () => {
  const history = useHistory();

  const navigateToAbout = () => {
      history.push('/about');
  };


  return (
    <div className='about'>
      <Navigation />
      <div>
      <div className="container-fluid py-5 champ">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-4 mb-3 text-end">
            <img
              src="images/Dorothee.jpg"
              className="img-fluid rounded actor-image"
              alt="Dorothee"
            />
          </div>
          <div className="col-12 col-md-4 text-center ">
          <img
              src="images/Hamanou.jpg"
              className="img-fluid rounded actor-image"
              alt="Hamanou"
            />
          </div>
        </div>
        <div className='col d-flex justify-content-center'>
            <p className="py-3 biography text-justify ">
            Dorothée et Hamanou, deux étudiants passionnés de développement web, ont uni leurs forces pour créer un site de catalogue de films en ligne. Forts de leurs connaissances acquises au cours de leur programme en Développement web au Collège O'Sullivan de Québec, ils ont utilisé les langues HTML, CSS, JavaScript, JSON et React pour donner vie à ce projet. Hamanou s'est concentré surtout sur la structure et le design du site, assurant une interface utilisateur attrayante et intuitive grâce. De son côté, Dorothée a géré plus au niveau de la dynamique du site, en utilisant JavaScript et React pour intégrer des fonctionnalités interactives et optimiser l'expérience utilisateur. Ensemble, ils exploitent JSON pour structurer et gérer les données des films de la base de donned de The Movie Database (TMDB), créant ainsi un site performant et captivant pour les cinéphiles.

ThéMa vient d'une part et de l'autre de cette équipe. La première part prend la syllable finale de Dorothée et la seconde, la centrale de Hamanou. Ce nom convenait aux deux partis et s'arrimait bien avec le theme de ce projet.

            </p>
            </div>

      </div>
      <div className="centerer">
              <div className="wrap" onClick={navigateToAbout}>
                <a className="btn-5" href='#'>
                  Version originale
                </a>
              </div>
              </div>
    </div>
      <Footer />
    </div>
  );
};
  
  export default Apropos;