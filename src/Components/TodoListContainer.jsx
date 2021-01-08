import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/TodoListContainer.scss";
import IconCheck from "../images/icon-check.svg";
import IconCross from "../images/icon-cross.svg";
function TodoListContainer() {
  const todolist = useSelector((state) => state.todoreducer.todos);
  const theme=useSelector((state)=>state.todoreducer.theme)
  console.log('the theme',theme)
  return (
    <>
      {todolist.map((item) => {
        return (
          <div className="input-container" style={{backgroundColor:theme===true?"white":"#171723"}}>
            <img />
            <p className="input-container__text">{item}</p>
          </div>
        );
      })}
    </>
  );
}

export default TodoListContainer;
