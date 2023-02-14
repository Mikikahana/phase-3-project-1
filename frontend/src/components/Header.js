import React, { useState } from 'react'
import "./Header.css"
import Search from './Search'


export default function Header() {

const [search, setSearch] = useState('')

  return (
    <div className="Header">Header
    <Search search={search}  handleSetSearch={setSearch}/>
    </div>
  )
}
