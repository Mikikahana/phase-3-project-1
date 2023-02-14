import React, {useEffect} from 'react'
import './CollectionBook.css'

export default function CollectionBook({myBooks,setCollection}) {
    const {title, image_url, author, published_year, description,id} = myBooks
    


  function removeBook(book) {
      const newBooks = { ...myBooks }
      delete newBooks[book.id]
    
      setCollection(newBooks)
    
      fetch(`http://localhost:9292/collections/${book.id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    }

  /*   useEffect(() => {
      fetch(`http://localhost:9292/collections`)
      .then(response => response.json())
      .then(data => console.log('Success:', data))
    },[])
 */
  return (
    <div className="myBooks-div">
       <img src={image_url} alt="book-image"/>
         <div className="desc-div">
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h3>Published : {published_year}</h3>
          <p>{description}</p>
          <button onClick={removeBook}>Remove from collection</button>
         </div>
    </div>
  )
}
