import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import requests from "./../requests";
import Row from "./../components/Row/Row.component";

const useStyles = makeStyles((theme) => ({
  centerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: "#FFFF",
  },
  row: {},
}));

function SearchResult() {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop={13}
          color="#d8d8d8"
        >
          <Typography
            variant={matchesSm ? "subtitle1" : matchesMd ? "h6" : "h5"}
          >
            SEARCH RESULT FOR "Popular Content"
          </Typography>
          <Typography
            variant={
              matchesSm ? "caption" : matchesMd ? "subtitle2" : "subtitle1"
            }
          >
            Total 234 content found
          </Typography>
        </Box>

        <Box
          className={classes.row}
          position="relative"
          display="grid"
          gridTemplateColumns={`${
            matchesSm
              ? "repeat(2, 1fr)"
              : matchesMd
              ? "repeat(4, 1fr)"
              : "repeat(6, 1fr)"
          }`}
          gridGap="1.5rem"
        >
          {[...new Array(matchesSm ? 2 : matchesMd ? 4 : 6)].map(() => (
            <Box
              marginY={6}
              height={matchesSm ? "120px" : matchesMd ? "140px" : "168px"}
              width="100%"
              bgcolor="rgba(255, 255, 255, 0.027)"
              border="solid 4px rgba(255, 255, 255, 0.034)"
              borderRadius="10px"
            />
          ))}

          <Box className={classes.centerText}>
            <Typography
              variant={matchesSm ? "subtitle1" : matchesMd ? "h6" : "h5"}
            >
              NO RECORDS FOUND.
            </Typography>
            <Typography
              variant={matchesSm ? "h6" : matchesMd ? "h5" : "h4"}
              style={{ color: "#ffcb87", fontWeight: "bold" }}
            >
              TRY SOMETHING ELSE!
            </Typography>
          </Box>
        </Box>

        <Row title="POPULAR IN BINGE" fetchUrl={requests.fetchTopRated} />
      </Container>
    </>
  );
}

export default SearchResult;
