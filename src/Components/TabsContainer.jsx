import React from 'react'
import styles from "../styles/TabsContainer.scss"
function TabsContainer() {
    return (
        <>
        <div className={`tabs-container`}>
            <button><span>{`5 items left`}</span></button>
            <button><span>{`Clear Completed`}</span></button>
        </div>
        <div className="priority-container">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
        </>
    )
}

export default TabsContainer
