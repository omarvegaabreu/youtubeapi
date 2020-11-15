import React from "react";
import { Button, Form } from "semantic-ui-react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onChange = (e) => {
    console.log(e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();

    console.log(`event ${e.target.value}`);
  };
  render() {
    return (
      <Form>
        <Form.Input placeholder="Search" onChange={this.onChange} />
        <Button onClick={this.onSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default SearchBar;
