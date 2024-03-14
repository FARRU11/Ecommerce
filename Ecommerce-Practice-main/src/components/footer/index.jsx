import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="company-name">
          <p>E-Commerce</p>
        </div>
        <div className="page-links">
          <div className="column">
            <ul>
              <li className="link">
                <Link to="/products">Product</Link>
              </li>
              <li className="link">
                <Link to="/categories">Categories</Link>
              </li>
              <li className="link">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li className="link">
                <Link to="/login">Log In</Link>
              </li>
              <li className="link">
                <span className="NotAUser">Not a User?</span>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 E-Commerce</p>
      </div>
    </footer>
  );
}

export default Footer;
