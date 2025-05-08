import React from "react";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 mb-2 border border-gray-200 rounded-lg shadow-md">
      <span>{task}</span>
      <button
        onClick={() => onDelete(task)}
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
