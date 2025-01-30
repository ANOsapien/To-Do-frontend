import React, { useState} from "react";
import vectorIcon from "../../assets/inboxicon.png";
import icon from "../../assets/icon.png";
import "./Inbox.css";
import Dialog from "../sortdialogbox/sortdialogbox";
import TaskList from "../tasks/tasks";
function Inbox(){

    const [sortOrder, setSortOrder] = useState("Date")
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => {
        setIsDialogOpen((prev) => !prev);
    }

    return (
        <>
        <div id="whole">
            <div id="Inboxandicon">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={vectorIcon} alt="Inbox Icon" className="InboxIcon" />
                    <h1 className="InboxText">Inbox</h1>
                </div>
                <button className = "sort-box" onClick = {toggleDialog}>
                Sort
                <img src={icon} alt="Down Arrow" className="downarrow"></img>
                </button>
            </div>
            <hr className="inboxline"></hr>
            {isDialogOpen && (
            <Dialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            setOrder = {setSortOrder}
            />)}
        </div>
        <Tasks />
        </>
    )
}


const tasks = Array.from({ length: 20 }, (_, i) => ({
    text: `Task ${i + 1}`,
    date: `Feb ${i + 1}, 2025`,
    priority: (i+1)%4
  }));
  
function Tasks() {
    return (
      <>
        <div className="taskcont">
          <TaskList tasks={tasks} />
        </div>
      </>
    );
  }
  


export default Inbox