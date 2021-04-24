import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIVE_TASK, ADD_TASK, UPDATE_TASK } from "../redux/actiontypes";
import "../styles/inputcontainer.scss";
function InputContainer() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.todoreducer.theme);
  const cachedInput = useSelector((state) => state.todoreducer.cachedInput);
  const [input, setInput] = useState(
    cachedInput.input ? cachedInput.input : ""
  );
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (
      input !== "" &&
      event.keyCode === 13 &&
      Object.keys(cachedInput).length === 0
    ) {
      dispatch({ type: ADD_TASK, payload: { completed: false, input } });
      setInput("");
    } else if (
      input !== cachedInput.input &&
      event.keyCode === 13 &&
      Object.keys(cachedInput).length !== 0
    ) {
      dispatch({
        type: UPDATE_TASK,
        payload: {
          completed: false,
          index: cachedInput.index,
          updatetask: input,
        },
      });
    }
  };
  const handleState = () => {
    dispatch({ type: ACTIVE_TASK, activeList: [], filter: "" });
  };
  return (
    <div className="main-container">
      <div
        className={`input-container  input-container__${
          theme === true ? "light" : "dark"
        }`}
        style={{
          background: theme === true ? "white" : "#25273c",
          transition: "background 0.3s ease",
        }}
      >
        <input
          onClick={handleState}
          className={`input-container__todo input-container__todo__${
            theme === true ? "light" : "dark"
          }`}
          placeholder="Create a new Todo and press enter"
          label="data-input"
          onChange={handleChange}
          value={input}
          onKeyUp={handleKeyPress}
          style={{
            background: theme === true ? "white" : "#25273c",
            transition: "background 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

export default InputContainer;
