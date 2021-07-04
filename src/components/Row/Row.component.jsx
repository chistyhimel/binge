import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Slider from "react-slick";
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { useRef } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles, useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    background: "transparent",
    padding: "30px 0",

    transition: "transform 0.5s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.2, 1.2, 1)",
    },
  },
  cardMedia: {
    borderRadius: 6,
    objectFit: "cover",
    transition: "transform 0.5s ease-in-out",
    height: "180px",
    width: "180px",
    border: "6px solid #97979724",
    "&:hover": { border: "6px solid #e50914" },
  },
  sliderWrapper: { overflow: "visible" },
  buttonsWrapper: {
    color: "#FFFF",
  },
  arrowButton: {
    border: "2px solid #E50914",
    borderRadius: 10,
    padding: 5,
    marginLeft: 10,
    color: "#E50914",
    fontSize: "5px",
  },
}));

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results.slice(0, 10));
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const settings = {
    dots: false,
    infinite: movies.length > 6 ? true : false,
    autoplay: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  console.log(isLargeRow);

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
            {movies.length
              ? movies.map((movie, idx) => (
                  <Card elevation={0} className={classes.root} key={movie.id}>
                    <CardMedia
                      component="img"
                      alt={movie.name}
                      className={classes.cardMedia}
                      image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      title={movie.name}
                    />
                  </Card>
                ))
              : null}
          </Slider>
        </main>
      </Container>
    </>
  );
}

export default Row;
