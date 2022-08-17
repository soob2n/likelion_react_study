import React from 'react';
import { useParams } from "react-router-dom";
import { getMovie } from "../movie_data";

const Movie = () => {
  const params = useParams();
  console.log(params);

  const movie = getMovie(parseInt(params.movieId));
  console.log(movie);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>감독 : {movie.director}</p>
      <p>카테고리 : {movie.category}</p>
    </div>
  );
};

export default Movie;