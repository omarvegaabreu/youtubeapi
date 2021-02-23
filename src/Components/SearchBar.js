import React from "react";
import { Button, Form, Label, Segment, Container } from "semantic-ui-react";
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
      <Container>
        <Segment>
          <Label.Detail color="facebook">
            {this.state.term ? "Have fun!" : null}
          </Label.Detail>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Input
              value={this.state.term}
              placeholder="Search"
              onChange={this.onInputChange}
            />

            <Button color="facebook" onClick={this.onSubmit}>
              Search
            </Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default SearchBar;
