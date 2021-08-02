import React from "react";
import { useState } from "react";
import Banner from "../components/Banner/Banner.component";

function WatchTv() {
  const [contents, setContents] = useState([
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image: "https://wi.wallpapertip.com/wsimgs/76-769832_pro-news.jpg",
      },
      image: "https://www.somoynews.tv/_nuxt/img/somoy-logo-big-2.9e4efd5.png",
      title: "SOMOY NEWS",
      subTitle: "Everyday 7pm",
    },
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image:
          "https://thumbs.gfycat.com/AcclaimedGiddyArcticduck-size_restricted.gif",
      },
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/20/GTVBangladeshLogo.png",
      title: "GTV",
      subTitle: "Everyday 7pm",
    },
    {
      banner: {
        name: "সময় নিউজ",
        subTitle: "প্রতিদিন সন্ধ্যা ৭টায়",
        image:
          "https://thumbs.gfycat.com/AcclaimedGiddyArcticduck-size_restricted.gif",
      },
      image:
        "https://www.deepto.tv/sites/default/files/deepto_tv_logo%20Edit.png",
      title: "Dipto Tv",
      subTitle: "Everyday 7pm",
    },
  ]);
  return (
    <>
      <Banner tv data={contents} />
    </>
  );
}

export default WatchTv;
