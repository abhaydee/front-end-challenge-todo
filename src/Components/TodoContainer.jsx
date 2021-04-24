import React, { useState, useEffect } from "react";
import IconMoon from "../images/icon-moon.svg";
import IconSun from "../images/icon-sun.svg";
import InputContainer from "./InputContainer";
import { useDispatch } from "react-redux";
import TodoListContainer from "./TodoListContainer";
import TabsContainer from "./TabsContainer";
import "../styles/TodoContainer.scss";
function TodoContainer() {
  const [theme, setTheme] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "THEME", payload: theme });
  }, [theme, dispatch]);
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
          <h1
            className={
              "todo-container__heading animate__animated animate__bounceInDown"
            }
          >
            T O D O
          </h1>
          <img
            alt="theme-icon"
            src={theme === false ? IconSun : IconMoon}
            className={
              "todo-container__themeicon animate__animated animate__bounceInDown"
            }
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
          style={{
            background: theme === true ? "" : "#161621",
            transition: "background 0.3s ease",
          }}
        ></div>
      </div>
    </>
  );
}

export default TodoContainer;
