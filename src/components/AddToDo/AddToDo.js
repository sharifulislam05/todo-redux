import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../store/actions/todoActions";
import "./_addToDo.scss";

const AddToDo = () => {
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const handleAddToDo = () => {
    const toDoText = inputEl.current.value;
    dispatch(addToDo(toDoText));
    inputEl.current.value = "";
  };
  return (
    <div className="add-todo m-auto text-center">
      <h1>MyToDo</h1>
      <div className="mt-5 mb-2">
        <input
          type="text"
          ref={inputEl}
          className="input__todo--add"
          placeholder="Whats need to be done?"
        />
        <button onClick={handleAddToDo} className="btn__todo--add">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
