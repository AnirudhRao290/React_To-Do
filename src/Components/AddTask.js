import React, { useState, useEffect } from 'react';

function AddTask({ handleAddTask, handleUpdateTask, taskToEdit,setTaskToEdit, setCurrentView }) {
  const [taskInput, setTaskInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskInput(taskToEdit.task);
      setNameInput(taskToEdit.name);
    } else {
      setTaskInput('');
      setNameInput('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: taskToEdit ? taskToEdit.id : null,
      task: taskInput.trim(),
      name: nameInput.trim(),
      completed: taskToEdit ? taskToEdit.completed : false,
    };

    if (taskToEdit) {
      handleUpdateTask(task);
    } else {
      handleAddTask(task);
    }
    setTaskInput('');
    setNameInput('');
    setTaskToEdit(null);
    setCurrentView('viewTasks');
  };

  return (
    <form id="taskForm" className="container form" style={{ backgroundImage: 'none' }} onSubmit={handleSubmit}>
      <label htmlFor="taskInput">Task:</label>
      <input
        type="text"
        id="taskInput"
        name="taskInput"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        required
      />
      <br />
      <label htmlFor="nameInput">Name:</label>
      <input type="text" id="nameInput" name="nameInput" value={nameInput} onChange={(e) => setNameInput(e.target.value)} required/>
      <button type="submit" className="add" >
        {taskToEdit ? 'Update' : 'Submit'}
      </button>
    </form>
  );
}

export default AddTask;
      