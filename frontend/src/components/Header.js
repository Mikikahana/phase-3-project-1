import React, { useState } from 'react'
import "./Header.css"
import Search from "./Search"
import {Link} from 'react-router-dom'

export default function Header({search, setSearch, activeUser}) {
  return (
    <div className="Header">
      <Link to='/'><button>Home</button></Link>
      <Search search={search}  setSearch={setSearch}/>
      <Link to='/collections'><button>Go to my Collection</button></Link>
      { !activeUser ? <Link to='/profile'><button className='profileBtn'>My Profile</button></Link> :
      <Link to='/signup'><button className="signupBtn">Sign Up</button></Link>}
    </div>
  )
}
