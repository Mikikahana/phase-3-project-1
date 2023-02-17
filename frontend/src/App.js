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
  const [isAddBookFormOpen, setIsAddBookFormOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((response) => response.json())
    .then(setBooks)
    fetch("http://localhost:9292/collections")
    .then((response) => response.json())
    .then(res => setCollection(res))
  },[])

  function handleLogin(reader) {
    setReader({})
    navigate("/")
  }
  
  function addToCollection(book) {
    let myBooks = collection.map(book => book.title);
    if (myBooks.includes(book.title)){
      alert('This book is already in your collection.')
    }else{

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
        //reader_id: 9,
        notes:[]
      })
    })
      .then(response => response.json())
      .then(data => setCollection(prevCollection => [...prevCollection, data]))
      .catch(error => console.error('Error:', error))}
  }

  const filteredBooks = books.filter(book => {
    return  book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
    })

  return (
      <div className="app">
        <Header search={search} setSearch={setSearch} setIsAddBookFormOpen={setIsAddBookFormOpen}/>
        <Routes>
          <Route exact path='/' element= {<Content
            books={filteredBooks}
            setBooks={setBooks}
            handleAddToCollection={addToCollection}
            isAddBookFormOpen={isAddBookFormOpen}
            setIsAddBookFormOpen={setIsAddBookFormOpen}
            /> }></Route>

          <Route path='/collections' element={<MyCollection
            collection={collection}
            setCollection={setCollection}
            />}></Route>

          <Route path='/signup' element={<SignUp 
            handleLogin={handleLogin}
            />}></Route>

          <Route path='/profile' element={<MyProfile/>}/>
            {/* <SignUp handleLogin={handleLogin}/> */}
          <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        </Routes>
      </div>
  )
}

export default App;
