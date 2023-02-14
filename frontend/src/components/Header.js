import React, { useState } from 'react'
import "./Header.css"
import Search from "./Search"
import MyProfile from './MyProfile'
import {Link} from 'react-router-dom'

export default function Header({search, setSearch}) {
  return (
    <div className="Header">
      <Link to='/'><button>Home</button></Link>
      <Search search={search}  setSearch={setSearch}/>
      <Link to='/collections'><button>Go to my Collection</button></Link>
      <Link to='/signup'><button className="signupBtn">Sign Up</button></Link>
      <Link to='/profile'><button className='profileBtn'>My Profile:</button></Link>
      {/* <MyProfile/> */}
    </div>
  )
} 
