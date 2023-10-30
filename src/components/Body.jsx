import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

function Body({
  addNote,
  notes,
  querySearch,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  const activeNotes = notes.filter(
    (note) =>
      note.archived === false &&
      note.title.toLowerCase().includes(querySearch.toLowerCase().trim())
  );
  const archiveNotes = notes.filter(
    (note) =>
      note.archived === true &&
      note.title.toLowerCase().includes(querySearch.toLowerCase().trim())
  );

  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <h2>All Notes</h2>
      <NotesList
        notes={activeNotes}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <h2>Archive Notes</h2>
      <NotesList
        notes={archiveNotes}
        onDelete={onDelete}
        onUnarchive={onUnarchive}
      />
    </div>
  );
}

export default Body;
