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
        title="NETFLIX ORGINALS"
        isLargeRow
        fetchUrl={requests.fetchNetflixOrginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </>
  );
}

export default Home;
