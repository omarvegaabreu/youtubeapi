import React from "react";
import { Embed } from "semantic-ui-react";

const DisplayVideo = (props) => {
  return (
    <div className="ui container">
      <Embed id={"id"} placeholder={"placeholder"} source={"youtube"} />
    </div>
  );
};

export default DisplayVideo;
