import React, { Component } from "react";
import Demo from "../../mock/Mock";

class TodoInput extends Component {
  render() {
    return (
      <div className="input_div">
      <input
        onChange={this.props.handleChange}
        type="text"
        placeholder={this.props.Content.enter}
        required
        value={this.props.content}
        id={this.props.id}
      /></div>
    );
  }
}
TodoInput.defaultProps = { Content: Demo };
export default TodoInput;