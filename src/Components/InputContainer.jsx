import React,{useState} from 'react'
import styles from "../styles/inputcontainer.scss"
import CheckIcon from "../images/icon-check.svg";
import {useDispatch,useSelector} from "react-redux"
import { ADD_TASK } from '../redux/actiontypes';
function InputContainer() {
    const dispatch=useDispatch();
    const theme=useSelector((state)=>state.todoreducer.theme)
    const [input,setInput]=useState("")
    const handleChange=(event)=>{
        setInput(event.target.value)
    }
    const handleKeyPress=(event)=>{
        if(input!=="" && event.keyCode==13){
            dispatch({type:ADD_TASK,payload:input})
        }
    }
    return (
        <div className="main-container">
            <div className={`input-container  input-container__${theme===true?"light":"dark"}`} style={{backgroundColor:theme===true?"white":"#171723"}} >
                <span>
                    <img src={CheckIcon} alt="check-icon" className="input-container__image"/>
                    <input className={`input-container__todo input-container__todo__${theme===true?"light":"dark"}`} placeholder="Create a new Todo" onChange={handleChange} value={input} onKeyUp={handleKeyPress} style={{backgroundColor:theme===true?"white":"#171723"}}/>
                </span>    
            </div> 
        </div>
    )
}

export default InputContainer
