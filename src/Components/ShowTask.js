import React from 'react';

function ShowTask({
  tasks,
  actionColumn,
  completed,
  setCompleted,
  handleDeleteTask,
  handleToggleTaskCompletion,
  setTaskToEdit,
  setCurrentView
}) {
  const filteredTasks = tasks.filter((task) => task.completed !== true);
  const renderTasks = completed ? tasks : filteredTasks;
  const btnText = completed ? 'Current Tasks' : 'All Tasks';

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setCurrentView('addTask')
    setTaskToEdit(taskToEdit);
  };
  
  return (
    <div>
      <button className="btn incomplete" onClick={() => setCompleted(!completed)}>
        {btnText}
      </button>
      <h2>{completed ? 'All' : 'Current'} Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Name</th>
            {actionColumn && <th>Action</th>}
          </tr>
        </thead>
        <tbody className="taskTableBody">
          {renderTasks.length ? (
            renderTasks.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td className={row.completed ? 'completed' : ''}>{row.task}</td>
                <td>{row.name}</td>
                {actionColumn && (
                  <td>
                    <input type="checkbox" className="checkbox" checked={row.completed} onChange={() => handleToggleTaskCompletion(row.id)}/>
                    <button className="edit bn" onClick={() => handleEditTask(row.id)} disabled={row.completed}>
                      Edit
                    </button>
                    <button className="delete bn" onClick={() => handleDeleteTask(row.id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No tasks available🚫</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTask;
