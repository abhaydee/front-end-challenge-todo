import React,{useState} from "react";
import IconMoon from "../images/icon-moon.svg"
import IconSun from "../images/icon-sun.svg"
import styles from "../styles/TodoContainer.scss";
import InputContainer from "./InputContainer";
import {useSelector} from "react-redux"
function TodoContainer() {
    const [theme,setTheme]=useState(true)
    const todolist=useSelector((state)=>state.todoreducer.todos)
    console.log("the todo list",todolist)
    const handleTheme=()=>{
        setTheme(!theme)
    }
  return (
    <>
      <div>
      <div className={`todo-container ${theme===true?"todo-container__light":"todo-container__dark"}`}>
        <div className={"todo-container__theme"}>
            <h1 className={"todo-container__heading"}>T O D O</h1>
            <img src={theme===true? IconSun:IconMoon} className={"todo-container__themeicon"} onClick={handleTheme} />
        </div>
        <InputContainer/>

      </div>
      </div>
    </>
  );
}

export default TodoContainer;
