import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDeleteTask, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          onDeleteTask={onDeleteTask}
          toggle={onToggle}
          key={task.id}
          task={task}
        />
      ))}
    </>
  );
};

export default Tasks;
