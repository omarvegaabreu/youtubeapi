import React from "react";
import VideoDetail from "./VideoDetail";

const VideoItem = ({ video }) => {
  console.log("hello world");
  console.log(`video item ${video}`);
  // console.log("video item" + videos);
  // const renderedList = videos.map((video) => {
  //   return video;
  // });
  // console.log(renderedList);
  return <div key={"id"}>video Item :{video}</div>;
};

export default VideoItem;
