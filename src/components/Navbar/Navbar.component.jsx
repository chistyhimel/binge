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
import React from "react";
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

  console.log(theme);

  return (
    <>
      <AppBar position="fixed" color={trigger ? "primary" : "transparent"}>
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
  );
}

export default Navbar;
