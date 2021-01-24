import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconCheck from "../images/icon-check.svg";
import IconCross from "../images/icon-cross.svg";
import * as types from "../redux/actiontypes";
import "../styles/TodoListContainer.scss";
function TodoListContainer() {
  const todolist = useSelector((state) => state.todoreducer.todos);
  console.log("the todolist", todolist);
  const theme = useSelector((state) => state.todoreducer.theme);
  const filterTodo = useSelector((state) => state.todoreducer.filterTodo);
  console.log("the filter todo list", filterTodo);
  const [completestate, setCompletedState] = useState(false);
  const [indexvalue, setIndexValue] = useState("-1");
  const [inputvalue, setInputValue] = useState("");
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
  const handleComplete = (index, input) => {
    setIndexValue(index);
    setInputValue(input);
    setCompletedState(!completestate);
  };
  useEffect(() => {
    if (indexvalue !== -1 && inputvalue !== "") {
      if (completestate === true) {
        dispatch({
          type: types.UPDATE_TASK,
          payload: {
            index: indexvalue,
            completed: true,
            updatetask: inputvalue,
          },
        });
        dispatch({ type: types.ACTIVE_TASK, activeList: [], filter: "" });
      } else {
        dispatch({
          type: types.UPDATE_TASK,
          payload: {
            index: indexvalue,
            completed: false,
            updatetask: inputvalue,
          },
        });
      }
    }
  }, [completestate, indexvalue, inputvalue,dispatch]);
  function listMapped() {
    if (filterTodo?.filter === "complete") {
      return filterTodo.list;
    } else if (filterTodo.filter === "active") {
      return filterTodo.list;
    } else if (filterTodo.filter === "all") {
      return filterTodo.list;
    }
    return todolist
  }
  return (
    <>
      {listMapped().map((item, index) => {
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
                onClick={() => handleComplete(index, item.input)}
                key={index}
              >
                {item.completed === true && (
                  <img
                    src={IconCheck}
                    alt="check-icon"
                    className={"inputlist-container__check"}
                  />
                )}
              </div>
              <p
                className={`inputlist-container__text inputlist-container__text${
                  item.completed === true ? "__completed" : ""
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
