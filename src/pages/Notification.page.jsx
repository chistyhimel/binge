import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: 90,
    "& *": {
      color: "#d8d8d8",
    },
  },
  cardMedia: {
    width: "90px",
    height: "90px",
    objectFit: "cover",
    marginRight: 20,
    borderRadius: 8,

    "@media(max-width:600px)": {
      width: "70px",
      height: "70px",
    },
  },
}));

function Notification() {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  return (
    <>
      <main className={classes.wrapper}>
        <Container maxWidth="sm">
          <Box display="flex" justifyContent="space-between" paddingY={2}>
            <Typography>NOTIFICATION</Typography>
            <Typography>Clear All</Typography>
          </Box>

          {[...new Array(3)].map((item, idx) => (
            <Box
              bgcolor="#70707024"
              padding={matchesSm ? 2 : 4}
              border="solid 1px #70707032"
            >
              <Typography gutterBottom>NEW MOVIE ADDED</Typography>

              <Box display="flex" alignItems="center" paddingTop={2}>
                <img
                  src="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2018/12/04/76764-new-37.jpg"
                  alt=""
                  className={classes.cardMedia}
                  style={{}}
                />

                <Box width="100%">
                  <Typography
                    style={{ maxWidth: "220px", textTransform: "uppercase" }}
                    variant={matchesSm ? "body2" : "subtitle1"}
                  >
                    S1: e2: GOING TO HAVE A PARTY WITH JOE
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    paddingTop={matchesSm ? 1 : 2}
                  >
                    <Typography
                      variant={matchesSm ? "caption" : "body2"}
                      style={{ color: "#d8d8d860" }}
                    >
                      25 days ago
                    </Typography>
                    <Typography
                      variant={matchesSm ? "caption" : "body2"}
                      style={{ color: "#982a2a" }}
                    >
                      Remove
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
      </main>
    </>
  );
}

export default Notification;
