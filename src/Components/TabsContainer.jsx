import React from "react";
import { useSelector,useDispatch} from "react-redux";
import { ACTIVE_TASK, COMPLETE_TASK } from "../redux/actiontypes";
import styles from "../styles/TabsContainer.scss";
function TabsContainer() {
  let theme = useSelector((state) => state.todoreducer.theme);
  const dispatch=useDispatch();
  const todolist=useSelector((state)=>state.todoreducer.todos)
  const index=todolist.map((item,index)=>{
    if(item.completed==true){
      return index
    }
  })
  const handleComplete=()=>{
    console.log("hitting")
    let completeIndex=todolist.filter((item,index)=>{
      return item.completed==true
    })
    dispatch({type:COMPLETE_TASK,completeList:completeIndex})
  }
  const handleActive=()=>{
    let activeIndex=todolist.filter((item,index)=>{
      return item.completed==false
    })
    dispatch({type:ACTIVE_TASK,activeList:activeIndex})
  }
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
        <button onClick={handleActive}>Active</button>
        <button onClick={handleComplete}>Completed</button>
      </div>
    </>
  );
}

export default TabsContainer;
