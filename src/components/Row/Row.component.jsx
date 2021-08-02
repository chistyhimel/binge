import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Slider from "react-slick";
import {
  Container,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { useRef } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles, useTheme } from "@material-ui/styles";
import CardPrimary from "../CardPrimary/CardPrimary.component";

const useStyles = makeStyles((theme) => ({
  sliderWrapper: { overflow: "hidden", height: "auto" },

  arrowButton: {
    border: "2px solid #E50914",
    borderRadius: 10,
    padding: 5,
    marginLeft: 10,
    color: "#E50914",
    fontSize: "5px",
  },
}));

function Row({ title, fetchUrl, isLargeRow, tvData, tv }) {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    if (fetchUrl) {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results.slice(0, 7));
        return request;
      }
      fetchData();
    }
  }, [fetchUrl]);

  const settings = {
    className: "himel",
    dots: false,
    infinite: movies.length > 6 ? true : false,
    autoplay: false,
    speed: 500,
    slidesToShow: isLargeRow ? 3 : 6,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: isLargeRow ? 3 : 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: isLargeRow ? 2 : 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: isLargeRow ? 2 : 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: isLargeRow ? 1 : 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingY={1}
        >
          <Typography
            style={{ color: "#FFF" }}
            variant={matches ? "subtitle2" : "h5"}
            noWrap
          >
            {title}
          </Typography>
          <div>
            <IconButton className={classes.arrowButton} onClick={gotoPrev}>
              <ArrowBackIcon fontSize={matches ? "small" : "default"} />
            </IconButton>
            <IconButton className={classes.arrowButton} onClick={gotoNext}>
              <ArrowForwardIcon fontSize={matches ? "small" : "default"} />
            </IconButton>
          </div>
        </Box>
        <main className={classes.sliderWrapper}>
          <Slider {...settings} ref={sliderRef}>
            {tv
              ? tvData.map((movie, idx) => (
                  <CardPrimary key={movie.id} movie={movie} tv />
                ))
              : movies.length
              ? movies.map((movie, idx) => (
                  <CardPrimary key={movie.id} movie={movie} />
                ))
              : null}
          </Slider>
        </main>
      </Container>
    </>
  );
}

export default Row;
