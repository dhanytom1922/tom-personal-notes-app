import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="noteItem-delete-button" onClick={() => onDelete(id)}>Delete</button>
  );
}

export default DeleteButton;
