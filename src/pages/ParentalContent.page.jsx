import { Box, Typography, Container, useMediaQuery } from "@material-ui/core";
import React from "react";
import Row from "./../components/Row/Row.component";
import requests from "./../requests";

function ParentalContent() {
  const matchesSm = useMediaQuery("(max-width:600px)");
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
              PARANTEL CONTENT
            </Typography>
            <Typography variant={matchesSm ? "caption" : "subtitle1"}>
              Total 24 content
            </Typography>
          </Box>
        </Container>
        <Row fetchUrl={requests.fetchTrending} />
        <Row fetchUrl={requests.fetchTopRated} />
        <Row fetchUrl={requests.fetchHorrorMovies} />
      </Box>
    </>
  );
}

export default ParentalContent;
