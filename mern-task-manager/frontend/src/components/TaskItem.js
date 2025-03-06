import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskItem;