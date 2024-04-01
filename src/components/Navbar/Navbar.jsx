import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        PosterMovie
      </a>
      <ul>
        <li className="active">
          <a href="/" className="links-one">
            API
          </a>
          <a href="/" className="links-two">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
