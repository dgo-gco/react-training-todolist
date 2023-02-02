import React, { useState } from 'react';
import "./App.css";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { TaskType } from './models/Task';

const App = () => {
  const title = "To do list";
  const [show, setShow] = useState(false);
  const  [tasks, setTasks] = useState(data);
  const  [taskToEdit, setTaskToEdit] = useState<TaskType | null >(null);

  const updateTaskState = (taskId: number) => {
    // console.log(taskId);
    // setTaskToEditId(taskId);
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();

    if(taskToEditId != null) {
      const editedTask = tasks.find((task) => task.id === taskToEditId);
      if (editedTask) {
        editedTask.title = event.target.title.value;
        editedTask.description = event.target.description.value;
      }
      setTaskToEdit(null);
    } else {
      const formulario = new FormData(event.target)
      const newTask = Object.fromEntries(formulario)
      const taskPlusId = {
        id: tasks[tasks.length - 1].id +1,
        title: String(newTask.title)!,
        description: String(newTask.description),
        done: false
      } 
      tasks.push(taskPlusId)
      setTaskToEdit(null);
    }

    setShow(false)
  };

  const editTask = (taskId: number) => {
    const taskEdit = tasks.find((task) => task.id === taskId)
    if (taskEdit) {
      setTaskToEdit(taskEdit)
    }
    // setTaskToEditId(taskId)
    setShow(true)
    console.log(taskEdit)
  };

  const deleteTask = (taskId: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  };

  return (
    <div className="main">
      <Header
      title={title}
      />
      <TasksList
      tasks={tasks}
      deleteTask={deleteTask}
      editTask={editTask}
      />
      
      <button
        className="add-task-btn"
        onClick={() => setShow(true)}
      >
        +
      </button>
      <TaskFormModal
        show={show}
        handleClose={() => {setShow(false)}}
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title!,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
