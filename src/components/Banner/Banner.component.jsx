import React, { useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid } from "@material-ui/core";
import BannerCard from "./../BannerCard/BannerCard.component";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "100vh",
    marginBottom: 10,
  },
  cardContainer: {
    position: "absolute",
    width: "100%",
    bottom: 50,
  },
}));

function Banner() {
  const [movies, setMovies] = useState([]);
  const classes = useStyles();

  useState(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrginals);
      setMovies(request.data.results.slice(0, 3));
    }
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: movies.length > 3 ? true : false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <main
        className={classes.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[0]?.backdrop_path})`,
          backgroundPosition: "top center",
          // objectFit: "contain",
        }}
      >
        <main className={classes.cardContainer}>
          <Container>
            <Slider {...settings}>
              {movies.length
                ? movies.map((movie, idx) => (
                    <BannerCard key={movie.id} movie={movie} />
                  ))
                : null}
            </Slider>
          </Container>
        </main>
      </main>
    </>
  );
}

export default Banner;
