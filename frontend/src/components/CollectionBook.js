import React, { useState} from "react";
import "./CollectionBook.css";
import NotesList from "./NotesList";

export default function CollectionBook({ myBooks, setToggle }) {
  const { title, image_url, author, published_year, description, id } = myBooks;
  const [noteText, setNoteText] = useState("");
  const [noteArr, setNoteArr] = useState([]);

  // Delete a book from the collection
  function removeBook(id) {
    fetch(`http://localhost:9292/collections/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => setToggle((prev) => !prev))
      .catch((error) => console.error("Error:", error));
  }

  //Post a note to the book
  function handleChange(e) {
    setNoteText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/collections/${id}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        note: noteText,
        reader_id: 9,
        book_id: id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNoteArr((prevNotes) => [...prevNotes, data]);
        setNoteText("");
      })
      .catch((error) => console.error("Error:", error));
  }

 // Update /Patch a note 
  function handleUpdateNote(updatedNote) {
    const noteIndex = noteArr.findIndex((note) => note.id === updatedNote.id);
    const updatedNotes = [...noteArr];
    updatedNotes[noteIndex] = updatedNote;
    setNoteArr(updatedNotes);
  }

  return (
    <div className="myBooks-div">
      <img src={image_url} alt="book-image" />
      <div className="desc-div">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <h3>Published : {published_year}</h3>
        <p>{description}</p>
        <button onClick={(e) => removeBook(id)}>Remove from collection</button>
        <form onSubmit={handleSubmit}>
          <button type="submit">Add Notes</button>
          <textarea
            type="text"
            name="noteText"
            value={noteText}
            onChange={handleChange}
          ></textarea>
        </form>
        {noteArr.map((note, index) => (
          <NotesList
          key={index}
          note={note}
          bookId={id}
          onUpdateNote={handleUpdateNote}
          />
        ))}
      </div>
    </div>
  );
}
