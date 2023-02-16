import React from 'react'
import './Book.css'

export default function Book({book,handleAddToCollection}) {
    const {image_url, title, author, published_year, description} = book
  return (
    <div className="book-div">
          <img src={image_url} alt="book-image"/>
          <div className="description-div">
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h3>Published : {published_year}</h3>
          <p>{description}</p>
          <button onClick={() => handleAddToCollection(book)}>Add to my Library</button>
          </div>
    </div>
      )
}
