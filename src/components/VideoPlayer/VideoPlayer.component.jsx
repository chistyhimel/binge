import { useMediaQuery } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  const matchesMd = useMediaQuery("(max-width:960px)");
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        controls
        width={matchesMd ? "100%" : "98%"}
        height={matchesMd ? "95%" : "500px"}
      />
    </>
  );
}

export default VideoPlayer;
