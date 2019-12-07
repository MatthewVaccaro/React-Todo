import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: ""
    };
  }

  changeHandler = event => {
    this.setState({ formValue: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state.formValue);
    this.setState({ formValue: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Add Item"
            name="todoForm"
            value={this.state.formValue}
            onChange={this.changeHandler}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
