import React, { useState } from 'react';
import "./App.css";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';

const App = () => {
  const title = "To do list";
  const taskToEdit: any = null;

  const [show, setShow] = useState(false);
  const  [tasks, setTasks] = useState(data);

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    const formulario = new FormData(event.target)
    const newTask = Object.fromEntries(formulario)

    const taskPlusId = {
      id: tasks.length + 1,
      title: String(newTask.title),
      description: String(newTask.description),
      done: false
    }
    tasks.push(taskPlusId)
    console.log(tasks)
    setShow(false)
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
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
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
