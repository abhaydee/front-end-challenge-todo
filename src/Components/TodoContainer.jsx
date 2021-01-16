import React, { useState, useEffect } from "react";
import IconMoon from "../images/icon-moon.svg";
import IconSun from "../images/icon-sun.svg";
import styles from "../styles/TodoContainer.scss";
import InputContainer from "./InputContainer";
import { useSelector, useDispatch } from "react-redux";
import TodoListContainer from "./TodoListContainer";
import TabsContainer from "./TabsContainer";
function TodoContainer() {
  const [theme, setTheme] = useState(true);
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todoreducer.todos);
  useEffect(() => {
    dispatch({ type: "THEME", payload: theme });
  }, [theme]);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <div
        className={`todo-container ${
          theme === true ? "todo-container__light" : "todo-container__dark"
        }`}
      >
        <div className={"todo-container__theme"}>
          <h1 className={"todo-container__heading animate__animated animate__bounceInDown"}>T O D O</h1>
          <img
            src={theme === false ? IconSun : IconMoon}
            className={"todo-container__themeicon animate__animated animate__bounceInDown"}
            onClick={handleTheme}
          />
        </div>
        <InputContainer />
        <div className="todolist-container">
          <TodoListContainer />
          <TabsContainer />
        </div>
        <div
          className="todobottom-container"
          style={{ backgroundColor: theme === true ? "" : "#161621" }}
        ></div>
      </div>
    </>
  );
}

export default TodoContainer;
