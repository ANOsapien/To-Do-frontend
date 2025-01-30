import React from "react";
import notificon from "../../assets/notificon.png";
import "./notification.css";
import TaskList from "../tasks/tasks";

function Notification(){

    const tasks = Array.from({ length: 20 }, (_, i) => ({
        text: `Task ${i + 1}`,
        date: `Feb ${i + 1}, 2025`,
        priority: (i+1)%4
      }));
      

    return(
        <>
        <div id = "notifbar">
            <div className='notifandicon'>
                <img src = {notificon} alt="notificon" className='notificon'/>
                <h1 className='notification'>Notifications</h1>
            </div>
            <hr id="line"/>
        </div>
        <div className = "textandline">
            <span className = "text">Overdue</span>
            <hr className = "firline"/>
        </div>
        <div className="firsttable">
          <TaskList tasks={tasks} maxHeight={140}/>
        </div>
        <div className="textandlineagain">
            <span className = "text">Due Today</span>
            <hr className = "secline"/>
        </div>
        <div className="secondtable">
          <TaskList tasks={tasks} maxHeight={140} />
        </div>
        </>
    )
}

export default Notification;