import React from "react";
import { Embed, Container } from "semantic-ui-react";

const DisplayVideo = ({ videoToDisplay }) => {
  if (videoToDisplay) {
    const videoId = videoToDisplay.id.videoId;

    return (
      <Container>
        <Embed id={videoId} placeholder={"placeholder"} source={"youtube"} />
      </Container>
    );
  } else {
    return null;
  }
};

export default DisplayVideo;
