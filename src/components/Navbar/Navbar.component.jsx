import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Container,
  useScrollTrigger,
  useMediaQuery,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.component";
import Searchbar from "./../Searchbar/Searchbar.component";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontWeight: 700,
  },
  tabWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& > *": {
      color: "#FFF",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  // const matches = useMediaQuery("(max-width:600px)");

  const { pathname } = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let pathList = ["/login", "*"];
    let checkPath = pathList.includes(pathname);
    if (checkPath) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    return () => {};
  }, [pathname]);
  console.log(pathname);
  return showNavbar ? (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: `${trigger ? "#131313" : "#0000003d"}`,
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h4" color="secondary" className={classes.logo}>
              Binge
            </Typography>
            <Box width={matches ? "auto" : "80%"} ml="auto">
              {matches ? (
                <Sidebar />
              ) : (
                <Grid container spacing={10}>
                  <Grid item xs={6} className={classes.tabWrapper}>
                    <Typography>Genre</Typography>
                    <Typography>Watch TV</Typography>
                    <Typography>My List</Typography>
                    <Typography>Device</Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.tabWrapper}>
                    <Searchbar />
                    <Typography>Menu</Typography>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  ) : null;
}

export default Navbar;
