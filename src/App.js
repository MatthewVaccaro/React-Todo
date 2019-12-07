import React, { Component } from "react";
import "./components/TodoComponents/Todo.css";

//Components
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const data = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }

  toggle = itemId => {
    this.setState({
      data: this.state.data.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      data: this.state.data.filter(cv => {
        if (cv.completed === false) {
          return cv;
        }
      })
    });
  };

  addItem = cv => {
    const newItem = {
      tasks: cv,
      id: Date.now(),
      completed: false
    };

    this.setState({
      data: [...this.state.data, newItem]
    });
    console.log(this.state.data);
  };

  logState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="master">
        <h2>Welcome to your Todo App!</h2>
        <div className="content">
          <TodoForm addItem={this.addItem} />
          <button className="clear" onClick={this.clearCompleted}>
            Clear Competed
          </button>
        </div>
        <TodoList data={this.state.data} toggle={this.toggle} />
      </div>
    );
  }
}

export default App;
