import React from 'react'
import CollectionBook from './CollectionBook'

export default function MyCollection({collection}) {
  return (
    <div>
        {collection.map((myBooks,index) => (
            <CollectionBook 
            myBooks={myBooks}
            key={index}
            />
        ))}
    </div>
  )
}
