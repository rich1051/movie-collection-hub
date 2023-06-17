import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieItem from "../MovieItem/MovieItem";
import { Typography } from "@mui/material";

function MovieList() {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((store) => store.moviesReducer);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <Typography variant="h4">MovieList</Typography>
      <section className="movies">
        {moviesReducer.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieItem movie={movie} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
