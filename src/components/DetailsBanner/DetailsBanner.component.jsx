import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  banner: {
    background:
      "url(https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXL4h9ag9nSt-2wxhQ_FRe9WWMNW9OCZvtbOt4l1r77c0TsGQsHVdNPu1N6hTryRBGioOsOAnBKSRC6NQovZlfKqkTuX.jpg?r=b7b)",
    height: "60vh",
    width: "100%",
    backgroundSize: "100%",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: -1,
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 250,
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.64) 39%, #000000 74%)",
  },
  wrapper: {
    marginTop: -225,

    "@media(max-width:800px)": {
      marginTop: -180,
    },
  },
  cardImage: {
    height: "250px",
    width: "250px",
    border: "solid 4px rgba(255, 255, 255, 0.1)",
    borderRadius: "14px",
    objectFit: "cover",

    "@media(max-width:800px)": {
      height: "200px",
      width: "200px",
    },
  },
  button: {
    height: "60px",
    width: "180px",
    color: "#FFFF",

    "@media(max-width:600px)": {
      height: "40px",
      width: "140px",
      fontSize: "11px",
    },
  },
}));

function DetailsBanner() {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:800px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  const history = useHistory();
  const { id } = useParams();

  return (
    <>
      <header className={classes.banner}>
        <div className={classes.bottomGradient} />
      </header>
      <main className={classes.wrapper}>
        <Container>
          <Box display="flex" flexDirection={matchesMd ? "column" : "row"}>
            <Box margin={matchesMd ? "auto" : ""}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Project_Power_poster.jpeg/220px-Project_Power_poster.jpeg"
                alt=""
                className={classes.cardImage}
              />

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={matchesMd ? 200 : 250}
                paddingTop={1}
                style={{ color: "#8F8F8F", cursor: "pointer" }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ThumbUpAltIcon fontSize="small" />
                  &nbsp;
                  <Typography
                    variant="caption"
                    style={{ color: "#FFFF", fontSize: "13px" }}
                  >
                    Like
                  </Typography>
                </Box>{" "}
                &nbsp; &nbsp; &nbsp;
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <ThumbDownIcon fontSize="small" />
                  &nbsp;
                  <Typography
                    variant="caption"
                    style={{ color: "#FFFF", fontSize: "13px" }}
                  >
                    Dislike
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box paddingLeft={matchesMd ? 0 : 5}>
              <Typography
                variant={matchesSm ? "h5" : "h4"}
                style={{
                  color: "#d8d8d8",
                  fontWeight: 500,
                  paddingBottom: 2,
                  marginTop: 18,
                }}
              >
                PROJECT POWER
              </Typography>
              <Typography variant="subtitle2" style={{ color: "#8f8f8f" }}>
                Thriller, Action
              </Typography>

              <Box display="flex" alignItems="center" paddingY={2}>
                <TimerIcon style={{ color: "#d8d8d8" }} />
                <Typography variant="subtitle2" style={{ color: "#8f8f8f" }}>
                  1h 30m
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                maxWidth={matchesMd ? 300 : 380}
              >
                <Button
                  variant="contained"
                  size="large"
                  style={{ background: "#850000" }}
                  className={classes.button}
                  onClick={() => history.push(`/playing/${id}`)}
                >
                  Watch Now
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.button}
                >
                  + My List
                </Button>
              </Box>

              <Box paddingTop={5} paddingBottom={10}>
                <Typography
                  variant="subtitle1"
                  style={{ color: "#8f8f8f" }}
                  gutterBottom
                >
                  <strong style={{ color: "#d8d8d8" }}>Director :</strong>{" "}
                  Mahesh Manjrekar
                </Typography>
                <Typography variant="subtitle1" style={{ color: "#8f8f8f" }}>
                  <strong style={{ color: "#d8d8d8" }}>Cast :</strong> Vidyut
                  Jammwal, Shruti Haasan, Salil Ankola
                </Typography>
                <br />
                <Typography variant="subtitle1" style={{ color: "#8f8f8f" }}>
                  It is a hair-raising journey into the world of two lovers as
                  both their families are ripped apart for the sake of revenge
                  and power, and an entertaining look at how they rise out of
                  that pit of blood lust and despair, together.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </main>
    </>
  );
}

export default DetailsBanner;
