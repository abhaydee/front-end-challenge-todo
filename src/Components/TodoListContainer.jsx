import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/TodoListContainer.scss";
import IconCheck from "../images/icon-check.svg";
import IconCross from "../images/icon-cross.svg";
import * as types from "../redux/actiontypes";
function TodoListContainer() {
  const [completed, setCompleted] = useState("");
  const todolist = useSelector((state) => state.todoreducer.todos);
  console.log("the todolist", todolist);
  const theme = useSelector((state) => state.todoreducer.theme);
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch({ type: types.DELETE_TASK, payload: index });
  };
  const handleUpdate = (index, input) => {
    dispatch({
      type: types.EDIT__TASK,
      payload: { index: index, input: input },
    });
  };
  const handleComplete = () => [setCompleted(!completed)];
  return (
    <>
      {todolist.map((item, index) => {
        return (
          <div
            className={`inputlist-container inputlist-container${
              theme === true ? "__light" : "__dark"
            }`}
            key={index}
          >
            <div className="inputlist-container__child">
              <div
                className="inputlist-container__child__checkmark"
                onClick={handleComplete}
              >
                {completed === true && (
                  <img
                    src={IconCheck}
                    alt="check-icon"
                    className={"inputlist-container__check"}
                  />
                )}
              </div>
              <p
                className={`inputlist-container__text inputlist-container__text${
                  completed === true ? "__completed" : ""
                }`}
                onClick={() => handleUpdate(index, item.input)}
              >
                {item.input}
              </p>
              <img
                src={IconCross}
                alt="delete-icon"
                className={"inputlist-container__cross"}
                onClick={() => handleDelete(index)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoListContainer;
