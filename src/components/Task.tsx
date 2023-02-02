import React from "react";
import "./Task.css";
import { TaskType } from "../models/Task";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

type TaskProps = {
  tasks: TaskType
  deleteTask: (taskId: number) => void
  editTask: (taskId: number) => void
};

export const Task = ({tasks, deleteTask, editTask}: TaskProps) => {
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
        <button onClick={() => editTask(tasks.id)}> <AiFillEdit /> </button>
        <button onClick={() => deleteTask(tasks.id)}> <AiFillDelete /> </button>
      </div>
    </div>
  );
};
