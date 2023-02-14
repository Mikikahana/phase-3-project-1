import {useState, useEffect} from 'react'
import Header from './components/Header'
import Content from './components/Content'
import MyCollection from './components/MyCollection'
import SignUp from './components/SignUp'
import { Route, Routes, Link} from 'react-router-dom'

function App() {
  const [books, setBooks] = useState([])
  const [collection, setCollection] = useState([])
 
  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((response) => response.json())
    .then(setBooks)
  },[])

  function addToCollection(book) {
    
    fetch('http://localhost:9292/collections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: book.title,
        author: book.author,
        published_year: book.published_year,
        description: book.description,
        image_url: book.image_url,
        reader_id: 9
      })
    })
      .then(response => response.json())
      .then(data => setCollection(prevCollection => [...prevCollection, data]))
      .catch(error => console.error('Error:', error))
  }
  console.log(collection)
  
  return (
      <div className="app">
        <Header />
       
        
        <Routes>
          <Route exact path='/' element= {<Content 
            books={books}
            setBooks={setBooks} 
            handleAddToCollection={addToCollection}
            /> }></Route>

          <Route path='/collections' element={<MyCollection 
            collection={collection}
            setCollection={setCollection}
            />}></Route>

          <Route path='/signup' element={<SignUp />}/>
            {/* <SignUp handleLogin={handleLogin}/> */}
        </Routes>
      </div>
  )
}

export default App;
