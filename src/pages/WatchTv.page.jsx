import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Banner from "../components/Banner/Banner.component";
import Row from "./../components/Row/Row.component";
import requests from "./../requests";
import { makeStyles } from "@material-ui/styles";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const useStyles = makeStyles((theme) => ({
  formControlWrap: {
    "& *": {
      background: "#131313",
      color: "#FFFF",
    },
    "& .Dropdown-control , .Dropdown-menu": {
      border: "solid 2px rgba(154, 0, 0, 0.8)",
      borderRadius: "5px",
    },
  },
  formControl: {
    marginLeft: 20,
    width: 180,
  },
}));

function WatchTv() {
  const classes = useStyles();
  const matchesMd = useMediaQuery("(max-width:960px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  const [contents, setContents] = useState([
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image: "https://wi.wallpapertip.com/wsimgs/76-769832_pro-news.jpg",
      },
      backdrop_path:
        "https://www.somoynews.tv/_nuxt/img/somoy-logo-big-2.9e4efd5.png",
      name: "SOMOY NEWS",
      subTitle: "Everyday 7pm",
    },
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image:
          "https://thumbs.gfycat.com/AcclaimedGiddyArcticduck-size_restricted.gif",
      },
      backdrop_path:
        "https://upload.wikimedia.org/wikipedia/en/2/20/GTVBangladeshLogo.png",
      name: "GTV",
      subTitle: "Everyday 7pm",
    },
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image:
          "https://thumbs.gfycat.com/AcclaimedGiddyArcticduck-size_restricted.gif",
      },
      backdrop_path:
        "https://www.deepto.tv/sites/default/files/deepto_tv_logo%20Edit.png",
      name: "Dipto Tv",
      subTitle: "Everyday 7pm",
    },
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image: "https://wi.wallpapertip.com/wsimgs/76-769832_pro-news.jpg",
      },
      backdrop_path:
        "https://www.somoynews.tv/_nuxt/img/somoy-logo-big-2.9e4efd5.png",
      name: "SOMOY NEWS",
      subTitle: "Everyday 7pm",
    },
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image:
          "https://thumbs.gfycat.com/AcclaimedGiddyArcticduck-size_restricted.gif",
      },
      backdrop_path:
        "https://upload.wikimedia.org/wikipedia/en/2/20/GTVBangladeshLogo.png",
      name: "GTV",
      subTitle: "Everyday 7pm",
    },
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image:
          "https://thumbs.gfycat.com/AcclaimedGiddyArcticduck-size_restricted.gif",
      },
      backdrop_path:
        "https://www.deepto.tv/sites/default/files/deepto_tv_logo%20Edit.png",
      name: "Dipto Tv",
      subTitle: "Everyday 7pm",
    },
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image: "https://wi.wallpapertip.com/wsimgs/76-769832_pro-news.jpg",
      },
      backdrop_path:
        "https://www.somoynews.tv/_nuxt/img/somoy-logo-big-2.9e4efd5.png",
      name: "SOMOY NEWS",
      subTitle: "Everyday 7pm",
    },
  ]);
  const [selectedColor, setSelectedColor] = useState("All Channels");
  const options = ["Sports", "News", "Entertainment"];

  return (
    <>
      <Banner tv data={contents} />
      <Container>
        <Box
          color={"#FFFF"}
          className={classes.formControlWrap}
          display="flex"
          alignItems="center"
          paddingY={2}
        >
          <Typography variant={matchesSm ? "subtitle2" : "subtitle2"}>
            TV CHANNELS
          </Typography>
          <Dropdown
            className={classes.formControl}
            options={options}
            onChange={() => setSelectedColor(selectedColor)}
            value={selectedColor}
            placeholder="Select an option"
          />
        </Box>
      </Container>
      <Row title="NEWS" tvData={contents} tv />
      <Row title="Entertainment" tvData={contents} tv />
      <Row title="NEW RELEASE" tvData={contents} tv />
      <Row title="POPULER ON BINGE" fetchUrl={requests.fetchHorrorMovies} />
    </>
  );
}

export default WatchTv;
