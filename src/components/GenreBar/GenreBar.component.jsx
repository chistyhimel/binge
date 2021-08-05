import React from "react";
import { makeStyles } from "@material-ui/styles";
import TopDrawer from "./../TopDrawer/TopDrawer.component";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";

const genres = [
  "ALL GENRE",
  "ACTION",
  "COMEDY",
  "FASHION",
  "ROMANTIC",
  "THRILLER/SUSPENSE",
  "HORROR",
  "HISTORY",
  "SPORTS",
  "KIDS",
  "FAMILY",
  "DRAMA",
];

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    height: "60px",
    border: "solid 1px rgba(255, 255, 255, 0.1)",
    background: "#1c1c1c",
    fontWeight: 400,
    color: "#d8d8d8",
  },
}));

function GenreBar({ state }) {
  const classes = useStyles();
  const [showGenre, setShowGenre] = state;

  return (
    <>
      <TopDrawer
        open={showGenre}
        onClose={() => setShowGenre(false)}
        onOpen={() => setShowGenre(true)}
      >
        <Box
          bgcolor={"#131313ea"}
          color={"#d8d8d8"}
          paddingTop={2}
          paddingBottom={5}
        >
          <Container>
            <Typography variant="h6" gutterBottom>
              SET YOUR GENRE.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Select any Genre to filter out the content. You can only select
              once at a time.
            </Typography>
            <br />
            <Grid container spacing={3}>
              {genres.map((genre, idx) => (
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classes.button}
                    key={idx}
                    // onClick={() => history.push(`/playing/${id}`)}
                  >
                    {genre}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </TopDrawer>
    </>
  );
}

export default GenreBar;
