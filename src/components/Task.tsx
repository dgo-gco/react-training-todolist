import React from "react";
import "./Task.css";

// type TaskProps = {};

type TaskType = {
  id: number;
  title?: string;
  description: string;
  done: boolean;
}

export const Task = ({
  id,
  title,
  description,
  done,
}: TaskType) => {


  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={false} />
          <span className="checkmark"></span>
        </label>
        <p>{title}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => console.log("edit")}>Edit</button>
        <button onClick={() => console.log("delete")}>Delete</button>
      </div>
    </div>
  );
};
