import { Box, Container, SwipeableDrawer } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
  },
  wrapper: {
    background: "transparent",
    top: 60,
    // overflow: "hidden",
  },
}));

function TopDrawer({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <>
      <SwipeableDrawer
        {...restProps}
        anchor="top"
        classes={{ root: classes.root, paperAnchorTop: classes.wrapper }}
      >
        <Box
          bgcolor={"#131313ea"}
          color={"#d8d8d8"}
          paddingTop={8}
          paddingBottom={5}
        >
          <Container>{children}</Container>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default TopDrawer;
