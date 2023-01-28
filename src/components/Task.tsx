import React from "react";
import "./Task.css";
import { TaskType } from "../models/Task";

type TaskProps = {
  tasks: TaskType
  deleteTask: (taskId: number) => void
};

export const Task = ({tasks, deleteTask}: TaskProps) => {
  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={false} />
          <span className="checkmark"></span>
        </label>
        <p>{tasks.title}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => console.log("edit")}>Edit</button>
        <button onClick={() => deleteTask(tasks.id)}>Delete</button>
      </div>
    </div>
  );
};
