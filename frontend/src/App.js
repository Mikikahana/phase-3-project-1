import {useState, useEffect} from 'react'
import Header from './components/Header'
import Content from './components/Content'
import MyCollection from './components/MyCollection'
import SignUp from './components/SignUp'
import MyProfile from './components/MyProfile'
import Login from './components/Login'
import { Route, Routes, useNavigate} from 'react-router-dom'

function App() {
  const [reader, setReader] = useState({})
  const [books, setBooks] = useState([])
  const [collection, setCollection] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
 
  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((response) => response.json())
    .then(setBooks)
  },[])

  function handleLogin(reader) {
    setReader({})
    navigate("/login")
  }

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
        reader_id: 9,
        notes:[]
      })
    })
      .then(response => response.json())
      .then(data => setCollection(prevCollection => [...prevCollection, data]))
      .catch(error => console.error('Error:', error))
  }

  const filteredBooks = books.filter(book => {
    return  book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) 
    })
  
  return (
      <div className="app">
        <Header search={search} setSearch={setSearch}/>
        <Routes>
          <Route exact path='/' element= {<Content 
            books={filteredBooks}
            setBooks={setBooks} 
            handleAddToCollection={addToCollection}
            /> }></Route>

          <Route path='/collections' element={<MyCollection 
            collection={collection}
            setCollection={setCollection}
            />}></Route>

          <Route path='/signup' element={<SignUp />}/>

          <Route path='/profile' element={<MyProfile/>}/>
            {/* <SignUp handleLogin={handleLogin}/> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  )
}

export default App;
