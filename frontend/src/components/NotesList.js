import React, {useState} from 'react'
import Note from "./Note"

export default function NotesList( {note,onUpdateNote, bookId}) {
  const [edit, setEdit] = useState("");


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
        <>
          <Note
          note={note}
          />
          <li>
          <form onSubmit={handleSubmit}>
            <button>Edit Note</button>
            <input
            type="text"
            name="edit"
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
            placeholder="Edit this note"
            />
          </form>
        </li>
        </>
  )
}

