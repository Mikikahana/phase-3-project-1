import React from 'react'
import './AddBookForm.css'

export default function AddBookForm({newBook, handleFormSubmit, handleInputChange}) {
  return (
    <div className="form-div">
        <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newBook.title} onChange={handleInputChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={newBook.author} onChange={handleInputChange} />
        </label>
        <label>
          Image:
          <input type="text" name="image" value={newBook.image} onChange={handleInputChange} />
        </label>
        <label>
          Published Year:
          <input type="text" name="published_year" value={newBook.published_year} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={newBook.description} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Book</button>
      </form>

    </div>
  )
}
