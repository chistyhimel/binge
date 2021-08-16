import React from "react";
import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    width: "55%",

    "@media(max-width:959px)": {
      width: "100%",
    },
  },
  input: {
    width: "100%",
    background: "transparent",
    border: "solid 1px #4d4d4d",
    height: "35px",
    borderRadius: "6px",
    padding: "10px",
    color: "#d8d8d8",
    "&:focus": {
      // border: "",
      outline: "none",
    },
  },
  icon: {
    position: "absolute",
    right: 20,
    verticalAlign: "center",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#d8d8d8",
  },
}));

function Searchbar() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <main className={classes.wrapper}>
        <input type="text" className={classes.input} />
        <SearchIcon
          className={classes.icon}
          onClick={() => history.push("/search-results")}
        />
      </main>
    </>
  );
}

export default Searchbar;
