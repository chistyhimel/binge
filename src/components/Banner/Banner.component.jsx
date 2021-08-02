import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import BannerCard from "./../BannerCard/BannerCard.component";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  banner: {
    // height: "100vh",
    marginBottom: 10,
  },
  cardContainer: {
    // position: "absolute",
    // bottom: 0,
    height: "25vh",
    width: "100%",
    padding: "0px 0",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.64) 39%, #000000 74%)",
  },
}));

function Banner({ data, tv }) {
  const classes = useStyles();

  // console.log(data[0].banner.image);

  const settings = {
    dots: false,
    infinite: data.length > 3 ? true : false,
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
          backgroundImage: `${
            tv
              ? `url(${data[0].banner.image})`
              : `url(https://image.tmdb.org/t/p/original/${data[1]?.backdrop_path})`
          }`,
          backgroundPosition: "top center",
          // objectFit: "contain",
        }}
      >
        <Box
          height={"75vh"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          // alignItems="center"
          marginTop="auto"
        >
          <Typography variant="h2">{tv && data[0].banner.name}</Typography>
          <Typography variant="h5">{tv && data[0].banner.subTitle}</Typography>
          {tv && (
            <Button
              variant="contained"
              size="large"
              color="secondary"
              style={{
                // background: "#850000",
                height: "60px",
                width: "180px",
                color: "#FFFF",
              }}
              className={classes.button}
              // onClick={() => history.push(`/playing/${id}`)}
            >
              Watch Now
            </Button>
          )}
        </Box>

        <main className={classes.cardContainer}>
          <Container>
            <Slider {...settings}>
              {data.length
                ? data.map((movie, idx) => (
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
