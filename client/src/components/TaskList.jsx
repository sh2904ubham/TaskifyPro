import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
