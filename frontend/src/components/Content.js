import React, {useState} from 'react'
import Book from './Book'
import './Content.css'
import AddBookForm from './AddBookForm'

export default function Content({books, setBooks, handleAddToCollection}) {
const [newBook, setNewBook] = useState ( {
  title: "",
  author: "",
  image: "",
  published_year: "",
  description: ""
})

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setNewBook({ ...newBook, [name]: value });
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const addNewBook = {
    title: newBook.title,
    author: newBook.author,
    image: newBook.image,
    published_year: newBook.published_year,
    description: newBook.description
  };
  setNewBook({
    title: '',
    author: '',
    image: '',
    published_year: '',
    description: ''
  });
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
      {books.map(book_data => (
        <Book 
          book={book_data} 
          key={book_data.id}
          handleAddToCollection={handleAddToCollection}
        />
      ))}
      
    </div>
  )
}
