import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import TopDrawer from "./../TopDrawer/TopDrawer.component";
import { makeStyles } from "@material-ui/styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import LogoutAlertModal from "../LogoutAlertModal/LogoutAlertModal.component";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: 170,
    height: 170,
    borderRadius: 4,

    "@media(max-width:600px)": {
      maxWidth: 120,
      height: 120,
    },
  },
  button: {
    border: "solid 1px #707070",
    color: "#d8d8d8",
    height: 40,
    fontSize: "13px",
    marginTop: 10,
    "@media(max-width:600px)": {
      height: 40,
      fontSize: "11px",
    },
    "@media(max-width:330px)": {
      height: 40,
      fontSize: "8px",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function MenuContent({ state }) {
  const classes = useStyles();
  const [showMenu, setShowMenu] = state;
  const history = useHistory();
  const [openModal, setOpenModal] = React.useState(false);

  const hamdleOpenLogoutModal = () => {
    setOpenModal(true);
    setShowMenu(false);
  };

  const handleClick = (path) => {
    history.push(path);
    setShowMenu(false);
  };

  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  const matchesXm = useMediaQuery("(max-width:400px)");

  return (
    <>
      <TopDrawer
        open={showMenu}
        onClose={() => setShowMenu(false)}
        onOpen={() => setShowMenu(true)}
      >
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="center"
              marginBottom={matchesMd ? 3 : ""}
            >
              <img
                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwOTI0NDYwNjQ2Mjc4MjMy/gettyimages-1061959920.jpg"
                alt=""
                className={classes.image}
              />

              <Box paddingLeft={matchesXm ? 2 : 4}>
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
                <Button
                  className={classes.button}
                  component={Link}
                  to="/profile"
                  variant="outlined"
                >
                  User Account Details
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ cursor: "pointer" }}>
            <Typography
              align={matchesMd ? "left" : "right"}
              variant={matchesXm ? "subtitle1" : matchesMd ? "h6" : "h5"}
              gutterBottom
              onClick={() => handleClick("/subscription")}
            >
              SUBSCRIPTION
            </Typography>
            <Typography
              align={matchesMd ? "left" : "right"}
              variant={matchesXm ? "subtitle1" : matchesMd ? "h6" : "h5"}
              gutterBottom
              onClick={() => handleClick("/usage-history")}
            >
              USAGE HISTORY
            </Typography>
            <Typography
              align={matchesMd ? "left" : "right"}
              variant={matchesXm ? "subtitle1" : matchesMd ? "h6" : "h5"}
              gutterBottom
              onClick={() => handleClick("/parental-content")}
            >
              PARENTAL CONTENT
            </Typography>
            <Typography
              align={matchesMd ? "left" : "right"}
              variant={matchesXm ? "subtitle1" : matchesMd ? "h6" : "h5"}
              gutterBottom
              onClick={hamdleOpenLogoutModal}
            >
              LOGOUT
            </Typography>
          </Grid>
        </Grid>
      </TopDrawer>

      <LogoutAlertModal modalState={[openModal, setOpenModal]} />
    </>
  );
}

export default MenuContent;
