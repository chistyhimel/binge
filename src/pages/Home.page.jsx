import React, { useEffect, useState } from "react";
import Banner from "./../components/Banner/Banner.component";
import requests from "./../requests";
import Row from "./../components/Row/Row.component";
import Footer from "./../components/Footer/Footer.components";
import axios from "../axios";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrginals);
      setMovies(request.data.results.slice(0, 3));
    }
    fetchData();
  }, []);

  return (
    <>
      <Banner data={movies} />
      {/* <Row title="TRENDING" fetchUrl={requests.fetchNetflixOrginals} /> */}
      <Row title="NEW RELEASE" fetchUrl={requests.fetchTrending} />
      <Row title="POPULAR IN BINGE" fetchUrl={requests.fetchTopRated} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="BINGE ORGINALS"
        isLargeRow
        fetchUrl={requests.fetchActionMovies}
      />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </>
  );
}

export default Home;
