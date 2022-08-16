import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

function Banner() {
  const [movie, setMovie] = useState([]);
  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request);
    const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: 'videos'},
    });

    setMovie(movieDetail)
  };

  useEffect(() => {
    console.log(process.env.API_KEY);
    fetchData();
  }, []);

  return <div>Banner</div>;
}

export default Banner;
