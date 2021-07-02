import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: 100,
    background: "#1F1F1F",
    "& > *": {
      color: "#FFFF",
    },
  },
  logo: { fontWeight: 900, color: "#5c5c5c86" },
  iconWrapper: {
    color: "#FFFF",
    background: "#5c5c5c86",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footerContainer}>
        <Container>
          <Grid container alignItems="center" justify="center" spacing={10}>
            <Grid item xs={3}>
              <Typography variant="h2" className={classes.logo}>
                Binge
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                pb={3}
              >
                <Typography>Terms of Use</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Cookie Preference</Typography>
                <Typography>Help Center</Typography>
              </Box>
              <Typography align="center" gutterBottom>
                © 2021 Red Dot Digital Limited.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <IconButton className={classes.iconWrapper}>
                  <YouTubeIcon />
                </IconButton>
                <IconButton className={classes.iconWrapper}>
                  <TwitterIcon />
                </IconButton>
                <IconButton className={classes.iconWrapper}>
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
