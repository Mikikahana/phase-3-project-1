import React, {useState, useEffect} from 'react'
import './CollectionBook.css'
import NotesList from './NotesList'

export default function CollectionBook({myBooks,setToggle}) {
    const {title, image_url, author, published_year, description,id} = myBooks
    const [noteText, setNoteText] = useState('')
    const [noteArr, setNoteArr] = useState([])

 // Delete a book from the collection 
  function removeBook(id) {
      fetch(`http://localhost:9292/collections/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => setToggle(prev=>!prev))
        .catch(error => console.error('Error:', error));
    }

 //Post a note to the book 
  function handleChange(e) {
    e.preventDefault()
    setNoteText(e.target.value)
    noteArr.push(noteText)
      /* fetch("http://localhost:9292/collections", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(noteText)
      })
      .then(resp => resp.json())
      .then(data => {
      }) */   
  }

  console.log(noteText)
  return (
    <div className="myBooks-div">
       <img src={image_url} alt="book-image"/>
         <div className="desc-div">
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h3>Published : {published_year}</h3>
          <p>{description}</p>
          <button onClick={(e)=>removeBook(id)}>Remove from collection</button>
          <form>
            <button type="submit">Add Notes</button>
            <textarea
              type="text" 
              name="note" 
              value={noteText} 
              onChange={handleChange} 
            ></textarea>
            <button>Edit Note</button>
          </form>
          <ul>
            {noteArr.map(data=> (
              <NotesList
              notes={data}
              key={data.id}
              />
            ))}
          </ul>
         </div>
    </div>
  )
}
