import React, { useState,useEffect } from "react";
import IconMoon from "../images/icon-moon.svg";
import IconSun from "../images/icon-sun.svg";
import styles from "../styles/TodoContainer.scss";
import InputContainer from "./InputContainer";
import { useSelector, useDispatch } from "react-redux";
import TodoListContainer from "./TodoListContainer";
function TodoContainer() {
  const [theme, setTheme] = useState(true);
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todoreducer.todos);
  useEffect(()=>{
    dispatch({ type: "THEME", payload: theme });
  },[theme])
  const handleTheme = () => {
    setTheme(!theme);
  };
  console.log("the theming ",theme)
  return (
    <>
      <div
        className={`todo-container ${
          theme === true ? "todo-container__light" : "todo-container__dark"
        }`}
      >
        <div className={"todo-container__theme"}>
          <h1 className={"todo-container__heading"}>T O D O</h1>
          <img
            src={theme === true ? IconSun : IconMoon}
            className={"todo-container__themeicon"}
            onClick={handleTheme}
          />
        </div>
        <InputContainer />
        <div className="todolist-container">
          <TodoListContainer />
        </div>
        <div className="todobottom-container" style={{backgroundColor:theme===true?"":"#161621"}}></div>
      </div>
    </>
  );
}

export default TodoContainer;
