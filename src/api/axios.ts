import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.API_KEY,
    language: "ko-KR",
  },
});

export default instance;
