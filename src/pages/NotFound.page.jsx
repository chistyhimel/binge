import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  const matchesMd = useMediaQuery("(max-width:960px)");
  return (
    <>
      <Container>
        <Box
          style={{ height: "100vh" }}
          display="flex"
          alignItems="start"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography
            variant={matchesMd ? "h4" : "h3"}
            style={{ fontWeight: 800 }}
            color="secondary"
            component={Link}
            to="/"
            gutterBottom
          >
            Binge
          </Typography>
          <Typography
            variant={matchesMd ? "h5" : "h4"}
            style={{ fontWeight: 800, color: "#FFFFFF" }}
          >
            404 Error!
          </Typography>
          <Typography
            variant={matchesMd ? "subtitle2" : "h6"}
            style={{ color: "#d8d8d8", fontWeight: 400, paddingBottom: 10 }}
            gutterBottom
          >
            The page you requested couldn't found.
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            style={{ color: "#d8d8d8" }}
            component={Link}
            to="/"
          >
            Go to Home Page
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default NotFound;
