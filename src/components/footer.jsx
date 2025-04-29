import React from "react";
import "./footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer>
      <img src="./src/assets/logo.png" alt="Logo" className="footer-logo" />
      <h3 id="company-info">
       Learn, Teach and Grow with name
      </h3>
      <div className="help-links-container">
        <span className="help-links">
          <i className="fa-solid fa-circle-question"></i> FAQ
        </span>
        <span className="help-links">
          <i className="fa-solid fa-user"></i> About Us
        </span>
        <span className="help-links">
        <i className="fa-solid fa-lock"></i> Privacy Policy
        </span>
        
      </div>
<div className="footer-logo-container">
      <h1 className="cont">Contacts</h1>
      <div className="footer-container">
        <span className="footer-content">
          <i className="fa-solid fa-mobile-screen"></i> 123-456-78901
        </span>
        <span className="footer-content">
          <i className="fa-solid fa-location-dot"></i> London, 51 Street 43
        </span>
        <span className="footer-content">
          <i className="fa-regular fa-envelope"></i> abcd@gmail.com
        </span>
      </div>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-container">
         
          <div className="team-member">
            <img src="./src/assets/C.png" alt="Chandraveer" />
            <h3>Chandraveer</h3>
            <p>Team Member</p>
          </div>
          
          <div className="team-member">
            <img src="./src/assets/siddharth.png" alt="Siddarth" />
            <h3>Siddarth</h3>
            <p>Team Member</p>
          </div>
          
          <div className="team-member">
            <img src="./src/assets/ga.jpg" alt="Gagana" />
            <h3>Gagana</h3>
            <p>Team Leader</p>
          </div>
          <div className="team-member">
            <img src="./src/assets/prad.jpg" alt="Pradyumna" />
            <h3>Pradyumna</h3>
            <p>Team Member</p>
          </div>
        </div>
      </div>

      <div className="footer-link-container">
        <span className="footer-links">
          <i className="fa-brands fa-facebook-f"></i> Facebook
        </span>
        <span className="footer-links">
          <i className="fa-brands fa-twitter"></i> Twitter
        </span>
        <span className="footer-links">
          <i className="fa-brands fa-instagram"></i> Instagram
        </span>
        <span className="footer-links">
          <i className="fa-brands fa-linkedin-in"></i> LinkedIn
        </span>
        <span className="footer-links">
          <i className="fa-brands fa-youtube"></i> YouTube
        </span>
      </div>

      <div className="footer-text-container">
        &copy; 2025 by The Desk
        <br />
        All copyright, trademark, and other intellectual property rights on this site are the property of Desk
      </div>
    </footer>
  );
}

export default Footer;