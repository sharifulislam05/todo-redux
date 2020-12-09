import { connect } from "react-redux";
import React from "react";
import ToDoList from "../ToDoList/ToDoList";
import { getVisibleToDo } from "./VisibleFilter";

const VisibleToDO = ({ todos }) => {
  return (
    <div>
      {todos.map((td) => (
        <ToDoList todo={td} key={td.todoId} />
      ))}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  todos: getVisibleToDo(state.todo, state.visibility),
});

export default connect(mapStateToProps)(VisibleToDO);
