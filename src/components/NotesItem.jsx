import React from "react";
import Unarchive from "./button/UnarchiveButton";
import ArchiveButton from "./button/ArchiveButton";
import DeleteButton from "./button/DeleteButton";
import NotesItemContent from "./Content";
import { showFormattedDate } from "../utils/index";

function NotesItem({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <div className="note-item">
      <NotesItemContent
        title={title}
        date={showFormattedDate(createdAt)}
        body={body}
      />

      <div className="noteItem-action">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? (
          <Unarchive id={id} onUnarchive={onUnarchive} />
        ) : (
          <ArchiveButton id={id} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
}

export default NotesItem;
