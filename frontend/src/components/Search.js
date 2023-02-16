import React from 'react';
// import './Search.css'
import SearchIcon from '@mui/icons-material/Search'
import Input from '@mui/material/Input'

function Search({search, setSearch}) {

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="searchBar">
        <input className='search-name'
            type="text"
            placeholder='Type to search.....'
            value={search}
            onChange={handleSearch}
        />
        <button className='searchButton'>Search</button>
        </div>
        )
}

export default Search;