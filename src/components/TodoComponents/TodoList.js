// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.data
        ? props.data.map(cv => {
            return <Todo item={cv} key={cv.id} toggle={props.toggle} />;
          })
        : "No Items"}
    </div>
  );
};

export default TodoList;
