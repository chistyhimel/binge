import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontWeight: 700,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Binge
          </Typography>
          <div className="tabContainer">
              
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
