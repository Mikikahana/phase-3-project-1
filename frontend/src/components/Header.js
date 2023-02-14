import React, { useState } from 'react'
import "./Header.css"



import Search from "./Search"
import {Link} from 'react-router-dom'


export default function Header() {

const [search, setSearch] = useState('')

  return (

    <div className="Header">
      <Link to='/'><button>Home</button></Link>
      <Search search={search}  handleSetSearch={setSearch}/>
      <Link to='/collections'><button>Go to my Collection</button></Link>
      <Link to='/signup'><button className="signupBtn">Sign Up</button></Link>

    </div>
  )
}
