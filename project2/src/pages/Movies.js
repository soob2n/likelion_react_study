import React from 'react';
import { getMovies } from "../movie_data";
import { Link, Outlet } from "react-router-dom";

const movies = () => {
  const movies = getMovies();

  return (
    <div>
      <h1>영화 추천 목록</h1>
      <div>
        {movies.map((movie) => (
          <Link 
            to={`/movies/${movie.id}`} 
            key={movie.id} 
            style={{display: "block"}}
          >
            {movie.title}
          </Link>
        ))}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default movies;