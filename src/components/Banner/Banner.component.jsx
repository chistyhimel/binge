import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import BannerCard from "./../BannerCard/BannerCard.component";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  banner: {
    marginBottom: 10,
  },
  cardContainer: {
    height: "25vh",
    width: "100%",
    padding: "0px 0",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.64) 39%, #000000 74%)",
  },
  bannerTitle: {
    fontWeight: 800,
    color: "#FFF",
    "@media(max-width:700px)": {
      fontSize: "32px",
    },
  },
  bannerSubTitle: {
    background: "#1313139e",
    color: "#FFFF",
    padding: "10px 20px",
    margin: "15px 0",
    width: "fit-content",
    "@media(max-width:700px)": {
      fontSize: "20px",
    },
  },
  button: {
    height: "60px",
    width: "180px",
    "@media(max-width:700px)": {
      height: "40px",
      width: "140px",
      fontSize: "12px",
    },
  },
}));

function Banner({ data, tv }) {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");

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
        }}
      >
        <Container>
          <Box
            height={"75vh"}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            // alignItems="center"
            marginTop="auto"
          >
            <Typography variant="h2" className={classes.bannerTitle}>
              {tv && data[0].banner.name}
            </Typography>
            <Typography variant="h5" className={classes.bannerSubTitle}>
              {tv && data[0].banner.subTitle}
            </Typography>
            {tv && (
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className={classes.button}
                // onClick={() => history.push(`/playing/${id}`)}
              >
                Watch Now
              </Button>
            )}
          </Box>
        </Container>
        <main className={classes.cardContainer}>
          <Container>
            <Slider {...settings}>
              {data.length
                ? data.map((contentData, idx) => (
                    <BannerCard
                      key={contentData.id}
                      data={contentData}
                      tv={tv ? tv : null}
                    />
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
