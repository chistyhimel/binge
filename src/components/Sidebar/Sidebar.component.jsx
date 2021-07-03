import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { IconButton, List, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { ListItem, Divider } from "@material-ui/core";
import Searchbar from "./../Searchbar/Searchbar.component";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: theme.palette.common.black,
  },
  drawerItem: {
    color: "#FFFF",
  },
}));

function Sidebar({ drawerState }) {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem divider>
            <Searchbar />
          </ListItem>
          <ListItem divider button>
            <ListItemText className={classes.drawerItem}>Genre</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText className={classes.drawerItem}>Watch TV</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText className={classes.drawerItem}>My List</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText className={classes.drawerItem}>Device</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        color="secondary"
        style={{ marginLeft: "auto", display: "block" }}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuIcon style={{ height: "40px", width: "40px" }} />
      </IconButton>
    </>
  );
}

export default Sidebar;
