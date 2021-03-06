import { Box, Typography, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Row from "./../components/Row/Row.component";
import requests from "./../requests";
import axios from "../axios";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({}));

function MyList() {
  const matchesSm = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   if (requests.fetchTrending) {
  //     async function fetchData() {
  //       const request = await axios.get(requests.fetchTrending);
  //       setMovies(request.data.results.slice(0, 7));
  //       return request;
  //     }
  //     fetchData();
  //   }
  // }, []);

  return (
    <>
      <Box marginTop={10}>
        <Container>
          <Box
            color="#d8d8d8"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant={matchesSm ? "subtitle1" : "h5"}>
              MY LIST
            </Typography>
            <Typography variant={matchesSm ? "caption" : "subtitle1"}>
              Total 24 content
            </Typography>
          </Box>
        </Container>
        <div className={classes.contentWrapper}>
          <Row fetchUrl={requests.fetchTrending} />
          <Row fetchUrl={requests.fetchTopRated} />
          <Row fetchUrl={requests.fetchHorrorMovies} />
        </div>
      </Box>
    </>
  );
}

export default MyList;
