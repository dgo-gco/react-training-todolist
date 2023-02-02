import React, { useState } from 'react';
import "./TasksList.css";
import { Task } from "./Task";

import { TaskType } from "../models/Task";

type TasksListProps = {
    tasks: TaskType[];
    deleteTask: (taskId: number) => void
    editTask: (taskId: number) => void
  };


  export const TasksList = ({tasks, deleteTask, editTask}: TasksListProps) => {

   return (
       <div className='list-container'>
           {tasks.map((task) => ( 
               <Task tasks={task} 
               key={task.id}
               deleteTask={deleteTask}
               editTask={editTask}
               />
           ))}
       </div>
   )
 }
