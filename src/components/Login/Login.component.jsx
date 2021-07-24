import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  input: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#8f8f8f",
      fontSize: 20,
      fontWeight: 500,
      textAlign: "center",
    },
  },
}));

function Login({ otpState }) {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Typography
        variant={matchesMd ? "h5" : "h4"}
        style={{ color: "#d8d8d8" }}
      >
        Let's Get Started
      </Typography>

      <Box maxWidth={250} m="auto" paddingY={2}>
        <Typography
          variant={matchesMd ? "body2" : "body1"}
          style={{ color: "#8f8f8f" }}
        >
          Largest content for endless entertainment just one step ahead Just
          tell us your Mobile Number
        </Typography>
      </Box>
      <FormControl fullWidth size={matchesSm ? "small" : "medium"}>
        <OutlinedInput
          classes={{
            input: classes.input,
          }}
          onChange={"weight"}
          placeholder="01xxxxxxxxxx"
        />
      </FormControl>

      <FormControlLabel
        style={{ padding: "15px 0" }}
        control={
          <Checkbox
            icon={
              <span
                fontSize="large"
                style={{
                  color: "#8f8f8f",
                  border: "solid 1px #8f8f8f",
                  borderRadius: 5,
                  height: `${matchesSm ? "20px" : "24px"}`,
                  width: `${matchesSm ? "20px" : "24px"}`,
                }}
              />
            }
            checkedIcon={
              <CheckIcon
                style={{
                  border: "solid 1px #8f8f8f",
                  borderRadius: 5,
                  stroke: "#D8D8D8",
                  strokeWidth: 2,
                }}
                fontSize="small"
              />
            }
            name="checkedH"
          />
        }
        label={
          <Typography
            variant={matchesMd ? "body2" : "body1"}
            align="left"
            style={{ paddingLeft: "5px" }}
          >
            I agree to the
            <u style={{ color: "#D8D8D8" }}> Privacy Policy </u> and{" "}
            <u style={{ color: "#D8D8D8" }}> Terms and Condition </u> of BINGE
            entertainment service.
          </Typography>
        }
        labelPlacement="end"
      />

      <Button
        variant="contained"
        size={matchesSm ? "small" : matchesMd ? "medium" : "large"}
        color="secondary"
        fullWidth
        style={{
          height: `${matchesSm ? "" : "60px"}`,
          fontSize: `${matchesSm ? "16px" : "20px"}`,
        }}
        onClick={() => otpState(true)}
      >
        NEXT
      </Button>
    </>
  );
}

export default Login;
