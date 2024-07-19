import '../styles/about.css'; 
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useHistory } from 'react-router-dom';




const About = () => {
    const history = useHistory();

    const navigateToApropos = () => {
        history.push('/apropos');
    };

  return (
    <div className='about'>
      <Navigation />
      <div>
      <div className="container-fluid py-5 champ">
      <h1>ABOUT ThéMa TEAM</h1>
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
            <p className="py-3 biographyAbouts text-justify">
             Dorothée and Hamanou, two students passionate about web development, joined forces to create an online movie catalog site. Armed with the knowledge they acquired during their Web Development program at O'Sullivan College of Quebec, they used HTML, CSS, JavaScript, JSON, and React to bring this project to life. Hamanou primarily focused on the site's structure and design, ensuring an attractive and intuitive user interface. Meanwhile, Dorothée handled the site's dynamics, using JavaScript and React to integrate interactive features and optimize the user experience. Together, they leveraged JSON to structure and manage the movie data from The Movie Database (TMDB), creating a high-performing and captivating site for movie enthusiasts.

ThéMa is derived from parts of their names. The first part takes the final syllable of Dorothée, and the second part, the central syllable of Hamanou. This name suited both parties and aligned well with the theme of their project.
            </p>
            </div>
      </div>
      <div className="centerer">
              <div className="wrap" onClick={navigateToApropos}>
                <a className="btn-5" href='#'>
                  See French Version
                </a>
              </div>
              </div>
    </div>
      <Footer />
    </div>
  );
};
  
  export default About;