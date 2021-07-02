import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  InputBase,
  Container,
  useScrollTrigger,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, useTheme } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontWeight: 700,
  },
  tabWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& > *": {
      color: "#FFF",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: 250,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  return <></>;
}

export default Navbar;
