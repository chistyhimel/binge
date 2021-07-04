import React from "react";
import Banner from "./../components/Banner/Banner.component";
import requests from "./../requests";
import Row from "./../components/Row/Row.component";
import Footer from "./../components/Footer/Footer.components";

function Home() {
  return (
    <>
      <Banner />
      <Row
        title="TRENDING"
        isLargeRow
        fetchUrl={requests.fetchNetflixOrginals}
      />
      <Row title="NEW RELEASE" fetchUrl={requests.fetchTrending} />
      <Row title="POPULAR IN BINGE" fetchUrl={requests.fetchActionMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="BINGE ORGINALS"
        isLargeRow
        fetchUrl={requests.fetchTopRated}
      />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </>
  );
}

export default Home;
