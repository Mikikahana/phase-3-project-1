import React from 'react'
import './CollectionBook.css'

export default function CollectionBook({myBooks}) {
    const {title, image_url, author, published_year, description} = myBooks
  return (
    <div className="myBooks-div">
       <img src={image_url} alt="book-image"/>
         <div className="description-div">
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h3>Published : {published_year}</h3>
          <p>{description}</p>
         </div>
    </div>
  )
}
