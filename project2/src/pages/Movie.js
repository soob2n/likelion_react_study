import React from 'react';
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getMovie } from "../movie_data";

const Movie = () => {
  const params = useParams();
  //console.log(params);

  const movie = getMovie(parseInt(params.movieId));
  //console.log(movie);

  //쿼리 스트링 사용하기
  const location = useLocation();
  //console.log(location);

  const [ searchParams, setSearchParams ] = useSearchParams();
  const detail = searchParams.get("detail");

  const handleClick = () => {
    setSearchParams({ detail: detail === "true" ? false : true });
  }
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>감독 : {movie.director}</p>
      <p>카테고리 : {movie.category}</p>
      <button type="button" onClick={handleClick}>
        자세히
      </button>
      {detail === "true" ? <p>{movie.detail}</p> : " "}
    </div>
  );
};

export default Movie;