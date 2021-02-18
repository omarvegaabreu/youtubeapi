import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedVideosList = videos.map((video) => {
    return <VideoItem video={video} />;
  });
  // console.log(renderedVideosList.snippet);
  return <div>{renderedVideosList}</div>;
};

export default VideoList;
