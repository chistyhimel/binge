import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
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

          <Typography variant={matchesSm ? "subtitle1" : "h6"}>
            Currently Active Plan
          </Typography>
          <Box
            bgcolor="#8500009b"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
            padding={matchesSm ? 2 : 4}
            width={matchesSm ? "100%" : "80%"}
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
            <Button
              variant="contained"
              color="secondary"
              style={{ fontSize: `${matchesSm ? "10px" : ""}` }}
            >
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
          <Typography variant={matchesSm ? "subtitle1" : "h6"}>
            Available Plans for Binge Android TV Device.
          </Typography>
          <Box
            bgcolor="#d10404"
            borderRadius="5px"
            padding={matchesSm ? 3 : 6}
            width={matchesSm ? "100%" : "80%"}
            marginY={3}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <div>
                <Typography variant={matchesSm ? "subtitle1" : "h6"}>
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
                <Typography variant={matchesSm ? "h5" : "h4"}>
                  ৳ 1099
                </Typography>
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

          <Typography variant={matchesSm ? "subtitle1" : "h6"}>
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

          <Typography color="secondary" style={{ margin: "35px 0 20px 0px" }}>
            Bundle Pack
          </Typography>
          <Grid container spacing={3}>
            {[...new Array(3)].map((item, idx) => (
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  textAlign="center"
                  bgcolor="#1c1c1c"
                  borderRadius="5px"
                  padding={7}
                >
                  <Typography variant="h6" gutterBottom>
                    Daily Plan
                  </Typography>
                  <Typography gutterBottom>
                    BDT 10 (+VAT,SD,SC) Per Daily.
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    ৳ 12.75
                  </Typography>
                  <Button
                    variant="contained"
                    style={{
                      color: "#d10404",
                      height: "50px",
                      width: "100%",
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography color="secondary" style={{ margin: "35px 0 20px 0px" }}>
            Data Pack
          </Typography>
          <Grid container spacing={3}>
            {[...new Array(3)].map((item, idx) => (
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  textAlign="center"
                  bgcolor="#1c1c1c"
                  borderRadius="5px"
                  padding={7}
                >
                  <Typography variant="h6" gutterBottom>
                    Daily Plan
                  </Typography>
                  <Typography gutterBottom>
                    BDT 10 (+VAT,SD,SC) Per Daily.
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    ৳ 12.75
                  </Typography>
                  <Button
                    variant="contained"
                    style={{
                      color: "#d10404",
                      height: "50px",
                      width: "100%",
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Subscription;
