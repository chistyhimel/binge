import React from "react";
import DetailsBanner from "../components/DetailsBanner/DetailsBanner.component";
import requests from "./../requests";
import Row from "./../components/Row/Row.component";

function Details() {
  return (
    <>
      <DetailsBanner />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="NEW RELEASE" fetchUrl={requests.fetchTopRated} />
      <Row title="POPULER ON BINGE" fetchUrl={requests.fetchHorrorMovies} />
    </>
  );
}

export default Details;
