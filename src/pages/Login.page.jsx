import React from "react";
import bgImg from "../assets/images/login-bg.jpg";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginContent from "../components/Login/Login.component";
import Otp from "../components/Login/Otp.component";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backdropFilter: "blur(8px)",
    background: `linear-gradient(to bottom,  #3d0003bd 39%, #000000f0 74%), url(${bgImg})`,
    height: "100vh",
    display: "grid",
    placeItems: "center",
  },
  loginWrapper: {
    maxWidth: 490,
    textAlign: "center",
    color: "#8f8f8f;",
    "& .MuiOutlinedInput-root": {
      background: "rgb(232, 241, 250)",
    },
  },
}));

function Login() {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  const matchesXm = useMediaQuery("(max-width:350px)");
  const [showOtpPage, setShowOtpPage] = useState(false);

  console.log({ showOtpPage });

  return (
    <>
      <main className={classes.wrapper}>
        <Box className={classes.loginWrapper} alignItems="center">
          <Typography
            variant={matchesMd ? "h4" : "h3"}
            style={{ fontWeight: 800 }}
            color="secondary"
            component={Link}
            to="/"
          >
            Binge
          </Typography>
          <Box
            bgcolor="primary.main"
            paddingY={matchesSm ? 3 : 7}
            paddingX={matchesXm ? 3 : matchesSm ? 5 : 10}
            marginY={3}
            marginX={matchesXm ? 1 : ""}
            borderRadius={10}
          >
            {showOtpPage ? <Otp /> : <LoginContent otpState={setShowOtpPage} />}
          </Box>
          <Typography>© 2021 Red Dot Digital Limited.</Typography>
        </Box>
      </main>
    </>
  );
}

export default Login;
