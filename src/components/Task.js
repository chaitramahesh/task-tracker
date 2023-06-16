import { FaTimes } from "react-icons/fa";
import React from "react";

const Task = ({ task, onDeleteTask, toggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDeleteTask(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
export default Task;
