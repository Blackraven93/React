import axios from "axios";
import React, { useEffect } from "react";

interface IRow {
  title: string;
  fetchUrl: string;
  isLargeRow?: string;
  id: string;
}

function Row({ title, fetchUrl, isLargeRow, id }: IRow) {

  useEffect(() => {
    const fetchMovieData = async () => {
      const request = await axios.get(fetchUrl)
      
    }
    fetchMovieData();
  }, [])
  

  return (
    <div>
      <div>{title}</div>
      <div>{fetchUrl}</div>
      <div>{isLargeRow}</div>
      <div>{id}</div>
    </div>
  );
}

export default Row;
