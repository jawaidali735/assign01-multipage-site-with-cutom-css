import '../styles/Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return(
        <div className="footer">
  
  <div className="footer-section logo-section">
  <div className="logo">
          <h2>Travel<span>Spot</span> </h2>
        </div>
    <p className="footer-description">Discover amazing places around the world with us.</p>
  </div>

  
  <div className="footer-section social-section">
    <h4>Follow Us</h4>
    <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
    </div>
  </div>

  
  <div className="footer-section links-section">
    <h4>Quick Links</h4>
    <ul className="footer-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</div>

    )
}

export default Footer;