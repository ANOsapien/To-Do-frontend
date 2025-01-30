import React from "react";
import "./tasks.css";

const getPriorityClass = (priority) => {
  switch (priority) {
      case 1: return "high";
      case 2: return "medium-high";
      case 3: return "medium";
      case 4: return "low";
      default: return "low";
  }
};


function TaskList({ tasks, maxHeight = 400}){
  return (
    <div className="task-list-container" style={{ maxHeight: `${maxHeight}px` }}>
      {tasks.map((task, index) => (
        <div className="task-card" key={index}>
          <div className="task-header">
            <span className={`priority ${getPriorityClass(task.priority)}`}></span>
          </div>
          <div className="task-content">
            <input type="checkbox" className="task-checkbox" />
            <span className="task-text">{task.text}</span>
          </div>
          <div className="task-footer">{task.date}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;