import React from "react";

function Unarchive({ id, onUnarchive }) {
  return (
    <button className="noteItem-archive-button" onClick={() => onUnarchive(id)}>Unarchive</button>
  );
}

export default Unarchive;
