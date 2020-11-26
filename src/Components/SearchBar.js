import React from "react";
import { Button, Form, Label } from "semantic-ui-react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (e) => this.setState({ term: e.target.value });

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar  ui segment">
        <Label as="a">
          YouTube API Video Search
          <Label.Detail>{this.state.term}</Label.Detail>
        </Label>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Input
            value={this.state.term}
            placeholder="Search"
            onChange={this.onInputChange}
          />

          <Button onClick={this.onSubmit}>my butt</Button>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
