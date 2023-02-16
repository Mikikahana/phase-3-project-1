import React, {useState} from 'react'
import Book from './Book'
import './Content.css'
import AddBookForm from './AddBookForm'
import { Grid } from "@mui/material"

const book = {
  title: "",
  author: "",
  image: "",
  published_year: "",
  description: ""
}
export default function Content({books, setBooks, handleAddToCollection}) {
const [newBook, setNewBook] = useState (book)

const handleInputChange = (event) => {
  const { name, value } = event.target
  setNewBook({ ...newBook, [name]: value })
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const addNewBook = {
    title: newBook.title,
    author: newBook.author,
    image: newBook.image,
    published_year: newBook.published_year,
    description: newBook.description
  }
  setNewBook(book);
  fetch('http://localhost:9292/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(addNewBook)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to add new book');
    })
    .then(newBookResponse => {
      setBooks([...books, newBookResponse]);
    })
    .catch(error => {
      console.error(error);
    });
}
  return (
    <div className="content">
      <AddBookForm 
        handleFormSubmit={handleFormSubmit}
        newBook={newBook}
        handleInputChange={handleInputChange}
      />
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start">
      {books.map(book_data => (
        <Book 
          book={book_data} 
          key={book_data.id}
          handleAddToCollection={handleAddToCollection}
        />
      ))}
    </Grid>
    </div>
  )
}
