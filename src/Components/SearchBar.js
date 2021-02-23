import React from "react";
import { Button, Form, Label, Segment, Icon } from "semantic-ui-react";
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
      <Segment raised>
        <Label.Detail color="facebook">
          {this.state.term ? "Have fun!" : null}
        </Label.Detail>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Input
            fluid
            value={this.state.term}
            placeholder="Search"
            onChange={this.onInputChange}
          />
          <Button animated="fade" color="facebook">
            <Button.Content visible>
              <Icon name="search" />
            </Button.Content>
            <Button.Content hidden fluid>
              Click
            </Button.Content>
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default SearchBar;
