import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Container,
  Divider,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function Subscription() {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box color="#d8d8d8" paddingTop={15}>
        <Container maxWidth="md">
          <Typography variant="h5">SUBSCRIPTION</Typography>
          <Divider
            style={{
              backgroundColor: "#70707063",
              marginTop: 15,
              marginBottom: 25,
            }}
          />

          <Typography variant="h6">Currently Active Plan</Typography>
          <Box
            bgcolor="#8500009b"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
            width="80%"
            padding={4}
            marginY={3}
          >
            <div>
              <Typography variant="caption">ACTIVE PACKAGE</Typography>
              <Typography variant="h6">MONTHLY</Typography>
              <Typography variant="h6">SUBSCRIPTION</Typography>
              <Typography variant="caption">
                last paid: 02 January 2021
              </Typography>
            </div>
            <Button variant="contained" color="secondary">
              Unsubscribe
            </Button>
          </Box>

          <Divider
            style={{
              backgroundColor: "#70707063",
              marginTop: 15,
              marginBottom: 25,
            }}
          />
          <Typography variant="h6">
            Available Plans for Binge Android TV Device.
          </Typography>
          <Box
            bgcolor="#d10404"
            padding={6}
            width="80%"
            borderRadius="5px"
            marginY={3}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <div>
                <Typography variant="h6">
                  Monthly Pack <br /> with Broadband
                </Typography>
                <Button
                  style={{
                    background: "#850000",
                    color: "#FFFF",
                    textTransform: "capitalize",
                    width: 100,
                    height: 25,
                  }}
                >
                  5mbps
                </Button>
              </div>
              <div>
                <Typography variant="h4">৳1099</Typography>
                <Typography variant="subtitle1">Validity: 30Days</Typography>
              </div>
            </Box>

            <Divider
              style={{
                backgroundColor: "#0000003d",
                marginTop: 15,
                marginBottom: 25,
              }}
            />
            <Button
              variant="contained"
              style={{
                background: "#850000",
                color: "#FFFF",
                height: "50px",
                width: "200px",
              }}
            >
              SUBSCRIBE NOW
            </Button>
          </Box>

          <Divider
            style={{
              backgroundColor: "#70707063",
              marginTop: 15,
              marginBottom: 25,
            }}
          />

          <Typography variant="h6">
            Available Plans for Binge Small Screens.
          </Typography>

          <Tabs
            value={value}
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Mobile Balance" />
            <Tab label="Online Payment" />
          </Tabs>
          <Divider
            style={{
              backgroundColor: "#70707063",
            }}
          />

          <Typography>Bundle Pack</Typography>

          <Box>
            <Typography>Bundle Pack</Typography>
            <Typography>Bundle Pack</Typography>
            <Typography>Bundle Pack</Typography>
            <Typography>Bundle Pack</Typography>
            <Button
              variant="contained"
              style={{
                background: "#850000",
                color: "#FFFF",
                height: "50px",
                width: "100%",
              }}
            >
              SUBSCRIBE NOW
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Subscription;
