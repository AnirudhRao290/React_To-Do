import React from 'react';
import ShowTask from './ShowTask';
import AddTask from './AddTask';

function Content({
  currentView,
  tasks,
  actionColumn,
  completed,
  setCompleted,
  handleAddTask,
  handleUpdateTask,
  handleDeleteTask,
  handleToggleTaskCompletion,
  setTaskToEdit,
  taskToEdit,
  setCurrentView
}) {
  return (
    <div className="Content">
      {currentView === 'viewTasks' && (
        <ShowTask
          tasks={tasks}
          actionColumn={actionColumn}
          completed={completed}
          setCompleted={setCompleted}
          handleDeleteTask={handleDeleteTask}
          handleToggleTaskCompletion={handleToggleTaskCompletion}
          setTaskToEdit={setTaskToEdit}
          setCurrentView={setCurrentView}
        />
      )}
      {currentView === 'addTask' && (
        <AddTask
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
          setCurrentView={setCurrentView}
        />
      )}
    </div>
  );
}

export default Content;
