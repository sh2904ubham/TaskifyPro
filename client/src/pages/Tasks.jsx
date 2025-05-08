import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div className="container mx-auto p-4">
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default Tasks;
