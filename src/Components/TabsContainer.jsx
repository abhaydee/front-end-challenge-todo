import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/TabsContainer.scss";
function TabsContainer() {
	let theme=useSelector((state)=>state.todoreducer.theme);
	console.log("the theme",theme)
  return (
    <>
      <div className={`tabs-container tabs-container${theme===true?"__light":"__dark"}`}>
        <button>
          <span>{`5 items left`}</span>
        </button>
        <button>
          <span>{`Clear Completed`}</span>
        </button>
      </div>
      <div className={`priority-container priority-container${theme===true?"__light":"__dark"}`}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </>
  );
}

export default TabsContainer;
