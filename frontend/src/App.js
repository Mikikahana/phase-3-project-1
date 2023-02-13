import {useState, useEffect} from 'react'
import Header from './components/Header'
import Content from './components/Content'
import MyCollection from './components/MyCollection'

function App() {
  const [books, setBooks] = useState([])
  const [collection, setCollection] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((response) => response.json())
    .then(setBooks)
  },[])

  function addToCollection(book) {
    setCollection(prevCollection => [...prevCollection, book]);
  }

  return (
   <div className="app">
    <Header />
    <Content books={books} setBooks={setBooks} handleAddToCollection={addToCollection}/>
    <MyCollection collection={collection} />
   </div>
      
  )
}

export default App;
