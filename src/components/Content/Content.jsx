import { useEffect } from "react";
import { useState } from "react";
import "./Content.css";

function Content(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(props.movies);
  });

  return (
    <div className="content">
      {movie.map((el) => (
        <div>{el.Title}</div>
      ))}
    </div>
  );
}

export default Content;
