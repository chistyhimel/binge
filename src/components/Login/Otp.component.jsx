import { Box, Button, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

const useStyles = makeStyles((theme) => ({
  input: {
    background: "#d8d8d8",
    width: "70px !important",
    height: "60px",
    borderRadius: "5px",
    border: "none",
    fontWeight: 600,
    fontSize: "20px",

    "@media (max-width:960px)": {
      width: "60px !important",
      height: "50px",
    },
    "@media (max-width:600px)": {
      width: "50px !important",
      height: "45px",
    },
    "@media (max-width:350px)": {
      width: "45px !important",
      height: "40px",
    },
  },
  resendButton: {
    borderRadius: "5px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "#8f8f8f",
    display: "block",
    margin: "15px auto",
    padding: "5px 50px",
  },
}));

function Otp() {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  const matchesXm = useMediaQuery("(max-width:350px)");
  const [otp, setOtp] = useState();

  const handleChange = (otp) => setOtp(otp);

  console.log(otp);

  return (
    <>
      {" "}
      <Typography
        variant={matchesMd ? "h5" : "h4"}
        style={{ color: "#d8d8d8" }}
      >
        OTP Verification
      </Typography>
      <Box maxWidth={250} m="auto" paddingY={2}>
        <Typography
          variant={matchesMd ? "body2" : "body1"}
          style={{ color: "#8f8f8f" }}
        >
          Submit your verification code that you have just got via SMS.
        </Typography>
      </Box>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        isInputNum
        inputStyle={classes.input}
        separator={<span>&nbsp;&nbsp;</span>}
      />
      <Typography
        variant="caption"
        color="secondary"
        display="block"
        style={{ padding: "5px 0" }}
      >
        Wrong code, please make sure the code.
      </Typography>
      <Typography
        variant={matchesXm ? "caption" : "body2"}
        style={{ color: "#8f8f8f" }}
      >
        Click Resent button to send code again.
      </Typography>
      <Button variant="contained" size="small" className={classes.resendButton}>
        Resend
      </Button>
      <Button
        variant="contained"
        size={matchesSm ? "small" : matchesMd ? "medium" : "large"}
        color="secondary"
        fullWidth
        style={{
          height: `${matchesSm ? "" : "60px"}`,
          fontSize: `${matchesSm ? "16px" : "20px"}`,
        }}
      >
        VERIFY NOW
      </Button>
    </>
  );
}

export default Otp;
