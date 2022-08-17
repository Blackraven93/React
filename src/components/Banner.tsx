import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

function Banner() {
  interface IMovie {
    title: string;
    name: string;
    original_name?: string;
    overview?: string;
    backdrop_path: string;
  }

  const [movie, setMovie] = useState<IMovie>();
  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request);
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });

    setMovie(movieDetail);
  };

  useEffect(() => {
    console.log(process.env.API_KEY);
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name || ''}
        </h1>
        <div className="banner__buttons">
          <button type="button" className="banner__button play">
            Play
          </button>
          <button type="button" className="banner__button info">
            <div className="space" /> More Information
          </button>
        </div>
        <h1 className="banner__description">{movie?.overview || ''}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
