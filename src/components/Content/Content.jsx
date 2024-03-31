import { useEffect } from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import "./Content.css";

function Content(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(props.movies);
  });

  return (
    <div className="content">
      <Cards movies={movie} />
    </div>
  );
}

export default Content;
