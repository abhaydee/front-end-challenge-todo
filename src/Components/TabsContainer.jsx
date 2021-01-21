import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTIVE_TASK, COMPLETE_TASK } from "../redux/actiontypes";
import styles from "../styles/TabsContainer.scss";
function TabsContainer() {
  let theme = useSelector((state) => state.todoreducer.theme);
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todoreducer.todos);
  const handleComplete = () => {
    let completeIndex = todolist.filter((item, index) => {
      return item.completed === true;
    });
    dispatch({ type: COMPLETE_TASK, completeList: completeIndex });
  };
  const handleActive = () => {
    let activeIndex = todolist.filter((item, index) => {
      return item.completed === false;
    });
    dispatch({ type: ACTIVE_TASK, activeList: activeIndex });
    dispatch({ type: COMPLETE_TASK, completeList: [] });
  };
  return (
    <>
      <div
        className={`tabs-container tabs-container${
          theme === true ? "__light" : "__dark"
        } animate__animated animate__lightSpeedInLeft`}
      >
        <button>
          <span>{`${todolist.length} items left`}</span>
        </button>
        <button onClick={handleActive}>
          <span>{`Clear Completed`}</span>
        </button>
      </div>
      <div
        className={`priority-container animate__animated animate__lightSpeedInRight priority-container${
          theme === true ? "__light" : "__dark"
        }`}
      >
        <button tabIndex="0">All</button>
        <button tabIndex="0" onClick={handleActive}>
          Active
        </button>
        <button tabIndex="0" onClick={handleComplete}>
          Completed
        </button>
      </div>
    </>
  );
}

export default TabsContainer;
