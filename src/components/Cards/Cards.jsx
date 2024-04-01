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
      {movie ? (
        movie.map((el) => (
          <div className="card" key={el.imdbID}>
            <div className="title">{el.Title}</div>
            <div className="year">{el.Year}</div>
            <div className="type">{el.Type}</div>
            <img
              src={
                el.Poster
                  ? el.Poster
                  : "https://img.icons8.com/ios/50/movie-projector.png"
              }
              alt=""
              height={300}
              className="poster"
            />
          </div>
        ))
      ) : (
        <div className="nth-fnd-text">Nothing found</div>
      )}
    </div>
  );
}

export default Cards;
