import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import requests from "../api/requests";
import "./styles/Banner.css";

function Banner() {
  interface IMovie {
    title: string;
    name: string;
    original_name?: string;
    overview: string;
    backdrop_path: string;
  }

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `;

  const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
  `;
  const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;

  const [movie, setMovie] = useState<IMovie>();
  const [isClicked, setIsClicked] = useState(false);
  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request);
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(movieDetail);
  };

  useEffect(() => {
    console.log(process.env.API_KEY);
    fetchData();
  }, []);

  const truncate = (movieDetail: string, limitNumber: number): string => {
    return movieDetail?.length > limitNumber
      ? `${movieDetail.substring(0, limitNumber - 1)}...`
      : movieDetail;
  };

  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name || ""}
          </h1>
          <div className="banner__buttons">
            <button
              type="button"
              className="banner__button play"
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
            <button type="button" className="banner__button info">
              <div className="space" /> More Information
            </button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview || "", 100)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  }
  return (
    <Container>
      <HomeContainer>
        <Iframe
          src={`https://www.youtube.com/embed/${movie?.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie?.videos.results[0].key}`}
          width="640"
          height="360"
          allow="autoplay; fullscreen"
        />
      </HomeContainer>
    </Container>
  );
}

export default Banner;
