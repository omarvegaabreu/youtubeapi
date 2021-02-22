import React from "react";
import { Embed } from "semantic-ui-react";

const DisplayVideo = ({ videoToDisplay }) => {
  if (videoToDisplay) {
    const videoId = videoToDisplay.id.videoId;

    return (
      <div className="ui container">
        <Embed id={videoId} placeholder={"placeholder"} source={"youtube"} />
      </div>
    );
  } else {
    return null;
  }
};

export default DisplayVideo;
