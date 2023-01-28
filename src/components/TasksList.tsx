import React, { useState } from 'react';
import "./TasksList.css";
import { Task } from "./Task";

import { TaskType } from "../models/Task";

type TasksListProps = {
    tasks: TaskType[];
    deleteTask: (taskId: number) => void
  };


  export const TasksList = ({tasks, deleteTask}: TasksListProps) => {

   return (
       <div className='list-container'>
           {tasks.map((task) => ( 
               <Task tasks={task} 
               key={task.id}
               deleteTask={deleteTask}
               />
           ))}
       </div>
   )
 }
