import React, {useState, useEffect} from 'react'
import './CollectionBook.css'

export default function CollectionBook({myBooks,setToggle}) {
    const {title, image_url, author, published_year, description,id} = myBooks
    


  function removeBook(id) {
      fetch(`http://localhost:9292/collections/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => setToggle(prev=>!prev))
        .catch(error => console.error('Error:', error));
    }


  return (
    <div className="myBooks-div">
       <img src={image_url} alt="book-image"/>
         <div className="desc-div">
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h3>Published : {published_year}</h3>
          <p>{description}</p>
          <button onClick={(e)=>removeBook(id)}>Remove from collection</button>
         </div>
    </div>
  )
}
