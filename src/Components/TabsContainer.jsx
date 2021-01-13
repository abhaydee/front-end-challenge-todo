import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/TabsContainer.scss";
function TabsContainer() {
  let theme = useSelector((state) => state.todoreducer.theme);
  console.log("the theme", theme);
  const todolist=useSelector((state)=>state.todoreducer.todos)
  const index=todolist.map((item,index)=>{
    if(item.completed==true){
      return index
    }
  })
  console.log("the completed index",index)
  return (
    <>
        <div
          className={`tabs-container tabs-container${
            theme === true ? "__light" : "__dark"
          } animate__animated animate__bounce`}
        >
          <button>
            <span>{`${todolist.length} items left`}</span>
          </button>
          <button>
            <span>{`Clear Completed`}</span>
          </button>
        </div>
      <div
        className={`priority-container priority-container${
          theme === true ? "__light" : "__dark"
        }`}
      >
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </>
  );
}

export default TabsContainer;
