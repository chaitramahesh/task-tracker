import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // on add task
  const onSaveTaskHandler = () => {
    setShowAddTask(false);
  };

  // Add task
  const addTaskHandler = (task) => {
    const newTask = { ...task, id: Math.floor(Math.random() * 10000) };
    setTasks((prevTask) => [...prevTask, newTask]);
  };

  // delete task
  const deleteTaskHandler = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const reminderHandler = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAddBtnClick={()=>setShowAddTask(!showAddTask)} onAddShow={showAddTask}/>
      {showAddTask && (
        <AddTask onSaveTask={onSaveTaskHandler} onAddTask={addTaskHandler} />
      )}
      {tasks.length > 0 && (
        <Tasks
          onDeleteTask={deleteTaskHandler}
          tasks={tasks}
          onToggle={reminderHandler}
        />
      )}
      {tasks.length === 0 && <p>NO Tasks To Show</p>}
      <Footer />
    </div>
  );
}

export default App;
