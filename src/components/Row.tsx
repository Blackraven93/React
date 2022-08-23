import React from "react";

interface IRow {
  title: string;
  fetchUrl: string;
  isLargeRow?: string;
  id: string;
}

function Row({ title, fetchUrl, isLargeRow, id }: IRow) {
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
