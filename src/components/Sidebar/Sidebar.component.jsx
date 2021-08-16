import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { IconButton, List, ListItemText } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { ListItem, Divider } from "@material-ui/core";
import Searchbar from "./../Searchbar/Searchbar.component";
import { makeStyles } from "@material-ui/styles";
import GenreBar from "../GenreBar/GenreBar.component";
import MenuContent from "./../MenuContent/MenuContent.component";

const useStyles = makeStyles((theme) => ({
  root: {},
  drawer: {
    background: theme.palette.common.black,
  },
  drawerItem: {
    color: "#FFFF",
  },
  wrapper: {
    paddingTop: 80,
  },
}));

function Sidebar({ drawerState }) {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const history = useHistory();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (path) => {
    history.push(path);
    setOpenDrawer(false);
  };

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ root: classes.root, paper: classes.drawer }}
      >
        <List disablePadding className={classes.wrapper}>
          <ListItem divider>
            <Searchbar />
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setShowGenre(!showGenre);
              setShowMenu(false);
              setOpenDrawer(false);
            }}
          >
            <ListItemText className={classes.drawerItem}>Genre</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => handleClick("/watch-tv")}>
            <ListItemText className={classes.drawerItem}>Watch TV</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText className={classes.drawerItem}>My List</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText
              className={classes.drawerItem}
              onClick={() => handleClick("/device")}
            >
              Device
            </ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText
              className={classes.drawerItem}
              onClick={() => {
                setShowGenre(false);
                setShowMenu(!showMenu);
                setOpenDrawer(false);
              }}
            >
              Menu
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        color="secondary"
        style={{ marginLeft: "auto", display: "block" }}
        onClick={() => {
          setOpenDrawer(!openDrawer);
          setShowMenu(false);
          setShowGenre(false);
        }}
      >
        <MenuIcon style={{ height: "40px", width: "40px" }} />
      </IconButton>

      <GenreBar state={[showGenre, setShowGenre]} />
      <MenuContent state={[showMenu, setShowMenu]} />
    </>
  );
}

export default Sidebar;
