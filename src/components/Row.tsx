import axios from "axios";
import React, { useEffect, useState } from "react";

interface IRow {
  title: string;
  fetchUrl: string;
  isLargeRow?: string;
  id: string;
}

function Row({ title, fetchUrl, isLargeRow, id }: IRow) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchMovieData();
  }, []);

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id)?.scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => {
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              loading="lazy"
              alt={movie.name}
            />;
          })}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id)?.scrollLeft +=
                window.innerHeight - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Row;
