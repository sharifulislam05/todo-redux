import React, { useState } from "react";
import "./_toDoList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCheckDouble,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  completeToDo,
  removeToDo,
  updateToDo,
} from "../../store/actions/todoActions";
import { connect } from "react-redux";

const ToDoList = ({ todo, removeToDo, completeToDo, updateToDo }) => {
  const { content, todoId, isComplete } = todo;
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(content);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleUpdate = () => {
    setEditable(!editable);
    updateToDo({ todoId, text });
  };

  return (
    <div className="task d-flex m-auto ">
      <div className="item__content ">
        {editable ? (
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            className="form-control item__edit"
          />
        ) : (
          <p
            className={`${
              isComplete ? "item-complete" : "text-black"
            } mt-2 ml-3`}
          >
            {content}
          </p>
        )}
      </div>
      <div className="w-50">
        <button className="mr-5 item-btn" onClick={() => handleUpdate()}>
          {editable ? (
            <FontAwesomeIcon className="text-success" icon={faCheckDouble} />
          ) : (
            <FontAwesomeIcon className="text-success" icon={faEdit} />
          )}
        </button>
        <button className="mr-5 item-btn" onClick={() => removeToDo(todoId)}>
          <FontAwesomeIcon className="text-danger mt-0" icon={faTrash} />
        </button>
        <button className="item-btn" onClick={() => completeToDo(todoId)}>
          <FontAwesomeIcon className="text-success" icon={faCheckCircle} />
        </button>
      </div>
    </div>
  );
};

export const mapDispatchToProps = {
  updateToDo,
  removeToDo,
  completeToDo,
};
export default connect(null, mapDispatchToProps)(ToDoList);
