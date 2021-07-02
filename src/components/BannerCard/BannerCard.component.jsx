import {
  CardContent,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000000e2",
    cursor: "pointer",
    borderRadius: 10,
    border: "4px solid transparent",
    transition: "all 0.2s",
    "&:hover": {
      border: "4px solid #E50914",
    },
  },
  cardTitle: {
    color: "#e4e4e4",
    textTransform: "uppercase",
    fontWeight: 600,
  },
}));

function BannerCard({ movie }) {
  const classes = useStyles();
  const { backdrop_path, poster_path, vote_average, name } = movie;
  console.log(movie);

  return movie ? (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={4}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="110"
                image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                title={name}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h5"
                className={classes.cardTitle}
                gutterBottom
                noWrap
              >
                {name}
              </Typography>
              <Typography style={{ color: "#646464" }} color="textSecondary">
                Action / Thriller
              </Typography>
              <Typography
                style={{ color: "#cecece" }}
                color="textSecondary"
                gutterBottom
              >
                {vote_average}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  ) : null;
}

export default BannerCard;
