import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { youTubeApiKey } from "../Util/apiKey";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search`,
      {
        params: {
          q: term,
          part: "snippet",
          type: "",
          maxResults: 10,
          key: youTubeApiKey(),
        },
      }
    );

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail selectedVideo={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
