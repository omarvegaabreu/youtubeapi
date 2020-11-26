import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { youTubeApiKey } from "../Util/apiKey";
import DisplayVideo from "./DisplayVideo";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import VideoItem from "./VideoItem";

class App extends React.Component {
  state = {
    videos: [],
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search`,
      {
        params: {
          q: term,
          part: "snippet",
          type: "",
          maxResults: 5,
          key: youTubeApiKey(),
        },
      }
    );
    this.setState({ videos: [...response.data.items] });

    console.log(this.state.videos);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <DisplayVideo videoId={this.state.id} />
        <VideoList />
        <VideoDetail />
        <VideoItem />
      </div>
    );
  }
}

export default App;
