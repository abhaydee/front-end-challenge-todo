import React,{useState} from 'react'
import styles from "../styles/inputcontainer.scss"
import CheckIcon from "../images/icon-check.svg";

function InputContainer() {
    const [input,setInput]=useState("")
    const handleChange=(event)=>{
        setInput(event.target.value)
    }
    return (
        <div className="main-container">
            <div className="input-container">
                <span>
                    <img src={CheckIcon} alt="check-icon" className="input-container__image"/>
                    <input className="input-container__todo" placeholder="Create a new Todo" onChange={handleChange} value={input}/>
                </span>    
            </div> 
        </div>
    )
}

export default InputContainer
