import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    maxWidth: "400px",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    border: "solid 3px #8f8f8f",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 4, 3),

    "@media(max-width:400px)": {
      padding: theme.spacing(6, 2, 3),
    },
  },
  button: {
    width: "48%",
    height: "60px",

    "@media(max-width:600px)": {
      height: "40px",
      fontSize: "10px",
    },
  },
}));

function LogoutAlertModal({ modalState }) {
  const [openModal, setOpenModal] = modalState;
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Modal
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <Typography
              variant={matchesSm ? "h5" : "h4"}
              style={{
                textTransform: "uppercase",
                color: "#ce0000",
                paddingBottom: "20px",
              }}
            >
              Are you Sure?
            </Typography>
            <Typography
              variant={matchesSm ? "body2" : "subtitle1"}
              style={{ color: "#8f8f8f" }}
            >
              Are you sure you want to log out from this account. You have to
              login again to use your account.
            </Typography>

            <Box display="flex" justifyContent="space-between" marginTop={6}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleClose}
              >
                Yes, Logout
              </Button>
            </Box>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default LogoutAlertModal;
