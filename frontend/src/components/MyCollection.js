import React,{useState,useEffect} from 'react'
import CollectionBook from './CollectionBook'

export default function MyCollection({collection, setCollection}) {
  const [toggle, setToogle] = useState(true)


   useEffect(() => {
      fetch(`http://localhost:9292/collections/9`,)
      .then(response => response.json())
      .then(data => setCollection(data))
    },[toggle])
 

  return (
    <div>
        {collection.map((myBooks,index) => (
            <CollectionBook 
            myBooks={myBooks}
            key={index}
            setToggle={setToogle}
            />
        ))}
    </div>
  )
}
