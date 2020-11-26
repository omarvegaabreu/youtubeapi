import React from "react";
import { Embed } from "semantic-ui-react";

const DisplayVideo = (props) => {
  return (
    <div className="ui container">
      <Embed
        id={props.videoId}
        placeholder={props.videoPlaceHolder}
        source={"youtube"}
      />
    </div>
  );
};

export default DisplayVideo;
