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
  CardActions,
  useMediaQuery,
} from "@material-ui/core";
import { useRef } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import TimerIcon from "@material-ui/icons/Timer";
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
  rootLg: {
    cursor: "pointer",
    background: "transparent",
    padding: "30px 0",
    "&:hover": {},
  },
  cardMedia: {
    borderRadius: 10,
    width: 170,
    height: 170,
    objectFit: "cover",
    transition: "all 0.5s ease-in-out",
    border: "4px solid #97979724",
    "&:hover": { border: "4px solid #e50914" },
    "@media (max-width:1250px)": {
      width: 165,
      height: 165,
    },
    "@media (max-width:1150px)": {
      width: 150,
      height: 150,
    },
    "@media (max-width:1100px)": {
      width: 140,
      height: 140,
    },
    "@media (max-width:1024px)": {
      width: 155,
      height: 155,
    },
    "@media (max-width:960px)": {
      width: 150,
      height: 150,
    },
    "@media (max-width:700px)": {
      width: 160,
      height: 160,
    },
    "@media (max-width:600px)": {
      width: 140,
      height: 140,
    },
    "@media (max-width:500px)": {
      width: 130,
      height: 130,
    },
    "@media (max-width:380px)": {
      width: 120,
      height: 120,
    },
  },
  cardMediaLg: {
    height: 380,
    width: 380,
    borderRadius: 8,
    border: "4px solid #97979724",
    transition: "all 0.5s ease-in-out",
    "&:hover": { border: "4px solid #e50914" },
    "@media (max-width:1250px)": {
      height: 320,
      width: 320,
    },
    "@media (max-width:1000px)": {
      height: 280,
      width: 280,
    },
    "@media (max-width:600px)": {
      height: 230,
      width: 230,
    },
  },
  cardTextLg: {
    "@media (max-width:1100px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width:600px)": {
      fontSize: "1.2rem",
    },
  },
  sliderWrapper: { overflow: "hidden" },
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
      setMovies(request.data.results.slice(0, 7));
      return request;
    }
    fetchData();
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
            {movies.length && !isLargeRow
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
              : movies.map((movie, idx) => (
                  <Card
                    elevation={0}
                    key={movie.id}
                    className={classes.rootLg}
                    style={{ background: "transparent" }}
                  >
                    <CardMedia
                      component="img"
                      alt={movie.name}
                      image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      title={movie.name}
                      className={classes.cardMediaLg}
                    />
                    <Box p={2}>
                      <Typography
                        style={{
                          color: "#c7c7c7",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                        variant="h4"
                        className={classes.cardTextLg}
                        noWrap
                      >
                        {movie.title}
                      </Typography>
                      <Typography
                        style={{
                          color: "#666666",
                          fontWeight: 600,
                        }}
                        variant="subtitle2"
                        noWrap
                        gutterBottom
                      >
                        Thriller, Action
                      </Typography>
                      <Typography
                        style={{
                          color: "#666666",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                        }}
                        variant="subtitle2"
                        noWrap
                      >
                        <TimerIcon
                          style={{ paddingRight: 5, color: "#E50914" }}
                        />{" "}
                        Thriller, Action
                      </Typography>
                    </Box>
                  </Card>
                ))}
          </Slider>
        </main>
      </Container>
    </>
  );
}

export default Row;
