import {
  CardContent,
  Grid,
  Typography,
  Card,
  CardMedia,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000000e2",
    cursor: "pointer",
    borderRadius: 10,
    border: "3px solid transparent",
    transition: "all 0.2s",
    "&:hover": {
      border: "3px solid rgba(154, 0, 0, 0.8)",
    },
  },
  cardTitle: {
    color: "#e4e4e4",
    textTransform: "uppercase",
    fontWeight: 600,

    "@media(max-width:1150px)": {
      fontSize: "16px",
    },
    "@media(max-width:600px)": {
      fontSize: "14px",
    },
  },
  subText: {
    "@media(max-width:1150px)": {
      fontSize: "14px",
    },
    "@media(max-width:600px)": {
      fontSize: "12px",
    },
  },
  icon: {
    "@media(max-width:1150px)": {
      fontSize: "20px",
    },
    "@media(max-width:600px)": {
      fontSize: "16px",
    },
  },
}));

function BannerCard({ data, tv }) {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:1150px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  const matchesXm = useMediaQuery("(max-width:400px)");
  const { backdrop_path, poster_path, vote_average, name, subTitle } = data;
  console.log(data);

  return data ? (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={4}>
              <CardMedia
                component="img"
                alt={name}
                height={matchesXm ? 50 : matchesMd ? 80 : 100}
                image={
                  tv
                    ? backdrop_path
                    : `https://image.tmdb.org/t/p/original${backdrop_path}`
                }
                title={name}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h6"
                className={classes.cardTitle}
                gutterBottom
                noWrap
              >
                {name}
              </Typography>
              <Typography
                style={{ color: "#646464" }}
                color="textSecondary"
                className={classes.subText}
              >
                {tv ? subTitle : "Action / Thriller"}
              </Typography>

              {!tv ? (
                <Box display="flex">
                  <Typography
                    style={{ color: "#cecece", paddingRight: "5px" }}
                    color="textSecondary"
                    gutterBottom
                    className={classes.subText}
                  >
                    {vote_average}
                  </Typography>
                  <StarIcon color="secondary" className={classes.icon} />
                </Box>
              ) : null}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  ) : null;
}

export default BannerCard;
