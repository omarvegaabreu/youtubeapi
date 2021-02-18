import React from "react";
// import VideoDetail from "./VideoDetail";

const VideoItem = ({ video }) => {
  const videoDescription = video.snippet.title;

  return <div>{videoDescription}</div>;
};

export default VideoItem;
