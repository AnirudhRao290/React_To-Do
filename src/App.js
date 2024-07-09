import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import ConfirmDialog from './Components/ConfirmDialog.js';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const [actionColumn, setActionColumn] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [currentView, setCurrentView] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [displayTask, setTasktoDisplay] = useState(tasks);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
    setTaskId(savedTasks.length ? Number(savedTasks[savedTasks.length - 1]?.id) + 1 : 1);
  }, []);

  useEffect(() => {
    setTasktoDisplay(tasks);
  }, [tasks]); 
  
  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleAddTask = (task) => {
    const newTasks = [...tasks, { ...task, id: taskId }];
    setTasks(newTasks);
    setTaskId(taskId + 1);
    saveTasksToLocalStorage(newTasks);
  };

  const handleUpdateTask = (updatedTask) => {
    const newTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTaskIdToDelete(taskId);
    setShowConfirmDialog(true);
  };

  const confirmDeleteTask = () => {
    const newTasks = tasks.filter((task) => task.id !== taskIdToDelete);
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
    setShowConfirmDialog(false);
    setTaskIdToDelete(null);
  };

  const cancelDeleteTask = () => {
    setShowConfirmDialog(false);
    setTaskIdToDelete(null);
  };

  const handleToggleTaskCompletion = (taskId) => {
    const newTasks = tasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task);
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  const searchName = (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    if (searchTerm === '') {
      setTasktoDisplay(tasks);
    } else {
      const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm));
      setTasktoDisplay(filteredTasks);
    }
  };
  
  return (
    <div className="App">
      <Header
        setCurrentView={setCurrentView}
        searchName={searchName}
        setTaskToEdit={setTaskToEdit}
        setActionColumn={setActionColumn}
      />
      <Content
        currentView={currentView}
        tasks={displayTask}
        actionColumn={actionColumn}
        completed={completed}
        setCompleted={setCompleted}
        handleAddTask={handleAddTask}
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
        handleToggleTaskCompletion={handleToggleTaskCompletion}
        setTaskToEdit={setTaskToEdit}
        taskToEdit={taskToEdit}
        setCurrentView={setCurrentView}
      />
      <ConfirmDialog
        show={showConfirmDialog}
        onConfirm={confirmDeleteTask}
        onCancel={cancelDeleteTask}
      />
    </div>
  );
}

export default App;
