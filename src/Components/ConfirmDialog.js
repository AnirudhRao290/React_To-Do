import React from 'react';

const ConfirmDialog = ({ show, onConfirm, onCancel }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="confirm-dialog-overlay">
      <div className="form confirm-dialog">
        <p>Are you sure you want to delete this task?"</p>
        <button className="btn" onClick={onConfirm}>Yes</button>
        <button className="btn" onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
