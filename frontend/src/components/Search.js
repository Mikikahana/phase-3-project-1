import React from 'react';
import './Search.css'



function Search({search, handleSetSearch}) {

    const handleSearch = (e) => {
        console.log(e.target.value)
        handleSetSearch(e.target.value)
    }

    return (
        <div className="searchBar">
        <input className='search-name'
        placeholder='Type to search.....'
        value={search}
        onChange={handleSearch}
        />
        <button className='searchButton'>Search</button>
        </div>
        )
}

export default Search;