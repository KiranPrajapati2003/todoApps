import React, { useState } from "react";
function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { task: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTask} className="add-btn">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li key={index} className="todo-item">
            <span
              onClick={() => toggleTask(index)}
              className={t.completed ? "task-completed" : ""}
            >
              {t.task}
            </span>
            <button onClick={() => deleteTask(index)} className="delete-btn">
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
