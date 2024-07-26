import React from 'react';
import '../styles/Navbar.css' // Custom CSS for Footer
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <>
   
        <footer className="background-color">
          <div className="container-fluid">
            <div className="row m-0">
              <div className="col-md-4 col-sm-12 text-center text-md-start">
                <h5 className="text-md-start font-weight-bold">Quick links</h5>
                <ul className="list-unstyled text-md-start">
                  <li><NavLink activeClassName="nav-active" exact to='/'> 
                   Home {/*Titre apparaissant sur le menu*/}
                </NavLink></li>
                  <li><NavLink activeClassName="nav-active" exact to='/about'> 
                   About {/*Titre apparaissant sur le menu*/}
                </NavLink></li>
                  <li><NavLink activeClassName="nav-active" exact to='/actorList'> 
                   Actors {/*Titre apparaissant sur le menu*/}
                </NavLink></li>
                <li><NavLink activeClassName="nav-active" exact to='/search'> 
                   Search {/*Titre apparaissant sur le menu*/}
                </NavLink></li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12 text-center text-md-start">
                <h5 className="text-center font-weight-bold">Follow us !</h5>
                <div className="social-icons text-center pt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512">
                    <path fill="#577063" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="37" width="37" viewBox="0 0 320 512">
                    <path fill="#577063" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </div>
                <div className="footer-contact text-center pb-3">
                  <p className="pb-3">contact@thema.ca</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 text-center ">
                <div className="footer-logo text-md-end">
                  <img src="/logo.png" alt="Your Logo" />
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer text-center">&copy;<span id="year">2024</span><span> ThéMa. All rights reserved.</span></div>
      </>
    );
  }
  

export default Footer;