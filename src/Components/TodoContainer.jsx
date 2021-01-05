import React from "react";
import IconMoon from "../images/icon-moon.svg"
import "../styles/TodoContainer.css";
function TodoContainer() {
  return (
    <>
      <div className="todo-container">
        <div className="todo-container__theme">
            <h1 className="todo-container__heading">T O D O</h1>
            <img src={IconMoon} width={50} height={50}/>
        </div>
      </div>
    </>
  );
}

export default TodoContainer;
