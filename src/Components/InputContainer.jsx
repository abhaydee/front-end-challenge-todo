import React,{useState} from 'react'
import styles from "../styles/inputcontainer.scss"
import CheckIcon from "../images/icon-check.svg";
import {useDispatch} from "react-redux"
import { ADD_TASK } from '../redux/actiontypes';
function InputContainer() {
    const dispatch=useDispatch();
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
            <div className="input-container">
                <span>
                    <img src={CheckIcon} alt="check-icon" className="input-container__image"/>
                    <input className="input-container__todo" placeholder="Create a new Todo" onChange={handleChange} value={input} onKeyUp={handleKeyPress}/>
                </span>    
            </div> 
        </div>
    )
}

export default InputContainer
