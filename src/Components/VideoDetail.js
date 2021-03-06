import React from "react";
import "./VideoDetail.css";
import {
  Button,
  Modal,
  Sticky,
  Embed,
  Icon,
  Container,
} from "semantic-ui-react";

const VideoDetail = ({ selectedVideo }) => {
  const [open, setOpen] = React.useState(false);
  if (selectedVideo) {
    const videoDescription = selectedVideo.snippet.description;
    const videoTitle = selectedVideo.snippet.title;
    const videoThumbnail = selectedVideo.snippet.thumbnails.high.url;
    const videoId = selectedVideo.id.videoId;
    return (
      <Container>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={
            <Sticky className="sticky">
              <Button animated color="red">
                <Button.Content visible>
                  Click to view: {videoTitle}
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="play" />
                </Button.Content>
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
      </Container>
    );
  }
  return null;
};

export default VideoDetail;
