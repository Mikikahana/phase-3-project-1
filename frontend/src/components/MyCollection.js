import React,{useState,useEffect} from 'react'
import CollectionBook from './CollectionBook'

export default function MyCollection({collection, setCollection}) {
  const [toggle, setToggle] = useState(true)
  // const [bookList, setBookList] = useState([])


  useEffect(() => {
      fetch(`http://localhost:9292/collections/9`,)
      .then(response => response.json())
      .then(data => setCollection(data))
    },[toggle,setCollection])


  return (
    <div>
      <h1>My Book Collection </h1>
        {collection.map((myBooks,index) => (
            <CollectionBook
            myBooks={myBooks}
            key={index}
            setToggle={setToggle}
            />
        ))}
    </div>
  )
}
