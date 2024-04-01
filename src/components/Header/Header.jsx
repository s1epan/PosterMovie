import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-elements">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/movie-projector.png"
          alt="movie-projector"
        />
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
