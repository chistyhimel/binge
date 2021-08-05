import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import TopDrawer from "./../TopDrawer/TopDrawer.component";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: 170,
    height: 170,
    borderRadius: 4,
  },
  button: {
    border: "solid 1px #707070",
    color: "#d8d8d8",
    height: 40,
    fontSize: "13px",
    marginTop: 10,
  },
}));

function MenuContent({ state }) {
  const classes = useStyles();
  const [showMenu, setShowMenu] = state;
  return (
    <>
      <TopDrawer
        open={showMenu}
        onClose={() => setShowMenu(false)}
        onOpen={() => setShowMenu(true)}
      >
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <img
                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwOTI0NDYwNjQ2Mjc4MjMy/gettyimages-1061959920.jpg"
                alt=""
                className={classes.image}
              />

              <Box paddingLeft={4}>
                <Typography variant="h6" style={{ color: "#FFFF" }}>
                  Rock Johnson
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ fontWeight: 300 }}
                >
                  Free User
                </Typography>
                <Button className={classes.button} variant="outlined">
                  User Account Details
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right" variant="h5" gutterBottom>
              SUBSCRIPTION
            </Typography>
            <Typography align="right" variant="h5" gutterBottom>
              USAGE HISTORY
            </Typography>
            <Typography align="right" variant="h5" gutterBottom>
              PARENTAL CONTENT
            </Typography>
            <Typography align="right" variant="h5" gutterBottom>
              LOGOUT
            </Typography>
          </Grid>
        </Grid>
      </TopDrawer>
    </>
  );
}

export default MenuContent;
