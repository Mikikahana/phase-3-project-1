import React, {useState} from 'react'
import Note from "./Note"
import './NotesList.css'

export default function NotesList( {note,onUpdateNote, bookId}) {
  const [edit, setEdit] = useState("")
  const [showEditField, setShowEditField] = useState(false)



  //Replace the existing note with a new one
  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `http://localhost:9292/collections/${bookId}/notes/${note.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          note: edit
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        onUpdateNote({
          ...note,
          note: data.note,
        });
        setEdit("");
      })
      .catch((error) => console.error("Error:", error))
  }

  return (
    <div className="notes-div">
      <Note note={note} />
      <div className="note-div">
        {showEditField ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="edit"
              value={edit}
              onChange={(e) => setEdit(e.target.value)}
              placeholder="Edit this note"
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <button className="editBtn" onClick={() => setShowEditField(true)}>
            Edit Note
          </button>
        )}
      </div>
    </div>
  );
}

