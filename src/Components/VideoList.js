import React from "react";
import VideoItem from "./VideoItem";
import { List } from "semantic-ui-react";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideosList = videos.map((video) => {
    const videoId = video.id.videoId;

    return (
      <VideoItem key={videoId} video={video} onVideoSelect={onVideoSelect} />
    );
  });
  return <List divided>{renderedVideosList}</List>;
};

export default VideoList;
