import React from 'react';
import "./TasksList.css";
import { Task } from "./Task";
import { data } from "../data/tasks";

import { TaskType } from "../models/Task";

type TasksListProps = {
    task: TaskType
  };

// XXXXXApp.tsx should not have the responsibility to iterate over the tasks. 
// XXXXXCreate an intermediate component TasksList.tsx that does that and 
// XXXXXdisplay each task using the Task component. 
// XXXXXAll the iteration logic should be transferred to the TasksList component and 
// XXXXXApp.tsx should just call the TasksList component. 
//  TasksList component should take a prop ;)


export const TasksList = ({task}: TasksListProps) => {
   const dataTasks = data.map(tache => {
        return (
          <Task 
          task={tache}
          />
        )
      })
    return(
        <div>
            <p>{dataTasks}</p>
        </div>
    )
}