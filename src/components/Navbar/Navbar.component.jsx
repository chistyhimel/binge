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
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.component";
import Searchbar from "./../Searchbar/Searchbar.component";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import GenreBar from "./../GenreBar/GenreBar.component";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuContent from "./../MenuContent/MenuContent.component";

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
      cursor: "pointer",
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
  const [showGenre, setShowGenre] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  console.log(showGenre);

  return showNavbar ? (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: `${
            trigger || showGenre || showMenu ? "#131313" : "#0000003d"
          }`,
          zIndex: 1400,
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Typography
              component={Link}
              to="/"
              variant="h4"
              color="secondary"
              className={classes.logo}
            >
              Binge
            </Typography>
            <Box width={matches ? "auto" : "80%"} ml="auto">
              {matches ? (
                <Sidebar />
              ) : (
                <Grid container spacing={10}>
                  <Grid item xs={6} className={classes.tabWrapper}>
                    <Box display="flex" alignItems="center">
                      <Typography
                        onClick={() => {
                          setShowGenre(!showGenre);
                          setShowMenu(false);
                        }}
                      >
                        Genre
                      </Typography>
                      {showGenre ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </Box>
                    <Typography component={Link} to="/watch-tv">
                      Watch TV
                    </Typography>
                    <Typography>My List</Typography>
                    <Typography component={Link} to="/device">
                      Device
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.tabWrapper}>
                    <Searchbar />
                    <NotificationsIcon />
                    <Box display="flex" alignItems="center">
                      <Typography
                        onClick={() => {
                          setShowGenre(false);
                          setShowMenu(!showMenu);
                        }}
                      >
                        Menu
                      </Typography>
                      {showGenre ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </Box>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Toolbar>
        </Container>
        {/* {showGenre ? <GenreBar /> : ""} */}
      </AppBar>

      <GenreBar state={[showGenre, setShowGenre]} />
      <MenuContent state={[showMenu, setShowMenu]} />
    </>
  ) : null;
}

export default Navbar;
