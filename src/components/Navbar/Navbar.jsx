import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        PosterMovie
      </Link>
      <ul>
        <li className="active">
          <Link to="/API" className="links-one">
            API
          </Link>
          <Link to="/about" className="links-two">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
