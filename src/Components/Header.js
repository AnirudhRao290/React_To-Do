import React from 'react';

function Header({ setCurrentView,searchName,setTaskToEdit,setActionColumn}) {
  return (
    <header>
      <h1>To-Do List📃</h1>
      <div className="buttons">
        <button className="btn hov tasks" onClick={() => {setCurrentView('viewTasks');setActionColumn(false)}}>View Tasks</button>
        <button className="btn hov add" onClick={() => {setCurrentView('addTask');setTaskToEdit('')}}>Add New Task</button>
        <button className="btn hov edits" onClick={()=>{setCurrentView('viewTasks'); setActionColumn(true)} }>Actions</button>
        <input type="text" id="searchInput" placeholder="Search by Name🔎" className="search" onChange={searchName} />
      </div>
    </header>
  );
}

export default Header;

