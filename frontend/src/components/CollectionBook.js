import React from 'react'
import './CollectionBook.css'

export default function CollectionBook({myBooks, deleteBook}) {
    const {title, image_url, author, published_year, description,id} = myBooks

    function removeBook(book) {
      fetch(`http://localhost:9292/collections/${id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(deleteBook(book))
      .catch(error => {
        console.error(error);
      });
    }
  return (
    <div className="myBooks-div">
       <img src={image_url} alt="book-image"/>
         <div className="desc-div">
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h3>Published : {published_year}</h3>
          <p>{description}</p>
          <button onClick={() =>removeBook(myBooks.id)}>Remove from collection</button>
         </div>
    </div>
  )
}
