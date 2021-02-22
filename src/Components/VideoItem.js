import "./VideoItem.css";
import React from "react";
import { List, Image } from "semantic-ui-react";

const VideoItem = ({ video, onVideoSelect }) => {
  const videoTitle = video.snippet.title;
  const videoThumbnail = video.snippet.thumbnails.medium.url;
  const videoKey = video.id.videoId;

  return (
    <List.Item
      key={videoKey}
      className="video-list-item"
      onClick={() => onVideoSelect(video)}
    >
      <Image className="video-list-image" src={videoThumbnail} size="small" />
      <List.Content verticalAlign="top">
        <List.Header className="video-list-heather" as="a">
          {videoTitle}
        </List.Header>
        <List.Description className="video-list-description"></List.Description>
      </List.Content>
    </List.Item>
  );
};

export default VideoItem;
