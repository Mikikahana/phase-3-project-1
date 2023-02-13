import {useState, useEffect} from 'react'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  const [books, setBooks] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((response) => response.json())
    .then(setBooks)
  },[])

  return (
   <div className="app">
    <Header />
    <Content books={books} setBooks={setBooks}/>
   </div>
      
  )
}

export default App;
