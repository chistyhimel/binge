import React, { useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid } from "@material-ui/core";
import BannerCard from "./../BannerCard/BannerCard.component";

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "100vh",
  },
  cardContainer: {
    position: "absolute",
    width: "100%",
    bottom: 100,
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

  return (
    <>
      <main
        className={classes.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[1]?.backdrop_path})`,
          backgroundPosition: "top center",
          // objectFit: "contain",
        }}
      >
        <main className={classes.cardContainer}>
          <Container>
            <Grid container spacing={3}>
              {movies.length
                ? movies.map((movie, idx) => (
                    <Grid key={movie.id} item xs={4}>
                      <BannerCard movie={movie} />
                    </Grid>
                  ))
                : null}
            </Grid>
          </Container>
        </main>
      </main>
    </>
  );
}

export default Banner;
