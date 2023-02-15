import React from 'react'

export default function NotesList({note}) {
  return (
        <li> {note} <button>Edit Note</button></li>
  )
}
