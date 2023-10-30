import React from "react";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="noteItem-archive-button" onClick={() => onArchive(id)}>
      Archive
    </button>
  );
}

export default ArchiveButton;
