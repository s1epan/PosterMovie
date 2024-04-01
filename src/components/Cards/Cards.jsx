// import Card from "../Card/Card";
import { useEffect } from "react";
import { useState } from "react";
import "./Cards.css";

function Cards(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(props.movies);
  });

  return (
    <div className="cards">
      {movie.map((el) => (
        <div className="card">
          <div className="title">{el.Title}</div>
          <div className="year">{el.Year}</div>
          <div className="type">{el.Type}</div>
          <img src={el.Poster} alt="" height={300} className="poster" />
        </div>
      ))}
    </div>
  );
}

export default Cards;
