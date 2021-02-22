import React from "react";
import "./VideoDetail.css";
import { Button, Modal, Sticky, Embed, Icon } from "semantic-ui-react";

const VideoDetail = ({ selectedVideo }) => {
  const [open, setOpen] = React.useState(false);
  if (selectedVideo) {
    const videoDescription = selectedVideo.snippet.description;
    const videoTitle = selectedVideo.snippet.title;
    const videoThumbnail = selectedVideo.snippet.thumbnails.high.url;
    const videoId = selectedVideo.id.videoId;
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Sticky className="sticky">
            <Button color="red" icon labelPosition="center">
              <Icon name="play" /> Click to view: {videoTitle}
            </Button>
          </Sticky>
        }
      >
        <Modal.Header>
          <p>{videoTitle}</p>
        </Modal.Header>
        <Modal.Content>
          <Embed id={videoId} placeholder={videoThumbnail} source="youtube" />

          <Modal.Description>
            <p> {videoDescription}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
  return null;
};

export default VideoDetail;
