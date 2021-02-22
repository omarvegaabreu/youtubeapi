import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "semantic-ui-react";
import "./VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideosList = videos.map((video) => {
    const videoId = video.id.videoId
      ? video.id.videoId
      : Math.floor(Math.random() * 20) + 1;
    console.log(videoId);

    return (
      <Grid.Column mobile={16} tablet={8} computer={8}>
        <VideoItem
          className="image-list"
          key={videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      </Grid.Column>
    );
  });
  return (
    <Grid relaxed columns={2}>
      {renderedVideosList}
    </Grid>
  );
};

export default VideoList;
