import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./../components/VideoPlayer/VideoPlayer.component";
import { makeStyles } from "@material-ui/styles";
import BannerCard from "./../components/BannerCard/BannerCard.component";
import requests from "./../requests";
import axios from "../axios";
import Row from "./../components/Row/Row.component";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "70px 0px 50px 0px",
    padding: "50px 0",
    background: "#000000",

    "@media(max-width:960px)": {
      margin: "50px 0px 20px 0px",
      padding: "20px 0",
    },
  },
  relatedContentBar: {
    height: 438,
    padding: "5px",
    margin: "0 10px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "3px",
      background: "#232323",
    },
    "&::-webkit-scrollbar-thumb": {
      width: "3px",
      background: "#850000",
    },
  },
  cardWrapper: {
    padding: "0 10px 10px 0",
  },
}));

function ContentPlay() {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrginals);
      setMovies(request.data.results.slice(4, 8));
    }
    fetchData();
  }, []);

  return (
    <>
      <main className={classes.wrapper}>
        <Container>
          <Grid spacing={0} container>
            <Grid item xs={12} md={8}>
              <VideoPlayer />
            </Grid>
            <Grid item xs={12} md={4} style={{ background: "#131313" }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                style={{ color: "#d8d8d8" }}
                padding={2}
              >
                <Typography variant="subtitle2">Related Videos</Typography>
                <Typography variant="subtitle2">24 VIDEOS</Typography>
              </Box>
              <div className={classes.relatedContentBar}>
                {movies.length
                  ? movies.map((movie, idx) => (
                      <div className={classes.cardWrapper} key={movie.id}>
                        <BannerCard key={movie.id} data={movie} />
                      </div>
                    ))
                  : null}
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="NEW RELEASE" fetchUrl={requests.fetchTopRated} />
      <Row title="POPULER ON BINGE" fetchUrl={requests.fetchHorrorMovies} />
    </>
  );
}

export default ContentPlay;
