import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <footer className={classes.footerContainer}>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            paddingY={5}
          >
            <Box order={matches ? 1 : 1}>
              <Typography variant="h2" className={classes.logo}>
                Binge
              </Typography>
            </Box>

            <Box order={matches ? 3 : 2} width={matches ? "100vw" : "50%"}>
              <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={matches ? "column" : "row"}
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
              <br />
              <Typography align="center">
                Demo Project of PRIMEX infosys
              </Typography>
            </Box>

            <Box
              order={matches ? 2 : 3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width={200}
              paddingY={3}
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
          </Box>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
