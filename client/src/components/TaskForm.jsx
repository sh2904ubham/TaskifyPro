import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4">Add Task</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
