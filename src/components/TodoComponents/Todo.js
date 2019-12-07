import React from "react";
import "../TodoComponents/Todo.css";

const Todo = props => {
  return (
    <div onClick={e => props.toggle(props.item.id)}>
      <p className={props.item.completed ? "complete" : "item"}>
        {props.item.tasks}
      </p>
    </div>
  );
};

export default Todo;
