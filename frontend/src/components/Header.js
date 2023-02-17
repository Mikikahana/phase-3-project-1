import React, { useState } from 'react';
import Search from "./Search";
import {Link} from 'react-router-dom';
import { AppBar, Box, InputBase, Toolbar, Typography, Button, Grid } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AddBookForm from './AddBookForm'


export default function Header({search, setSearch, activeUser, setIsAddBookFormOpen}) {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleAddBookClick = () => {
    setIsAddBookFormOpen(true);
  };
  

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode)
    const body = document.querySelector('body')
    body.style.backgroundColor = isDarkMode ?  '#FFF' :'rgb(60, 58, 58)'

    const books = document.querySelectorAll('.book')
    books.forEach((book) => {
      book.style.backgroundColor = isDarkMode ? '#FFF' : '#000'
    })

    const text= document.querySelectorAll('.text')
    text.forEach((text) => {
      text.style.color = isDarkMode ?  '#000' :'#FFF'
    })

  }

  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: isDarkMode ? "black" : "black" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{margin_left:"auto"}}>
              <Button variant="contained" sx={{ background: isDarkMode ? "black" : "#080808" }} onClick={handleDarkModeClick}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </Button>
            </Box>
            <Search search={search} setSearch={setSearch}/>
            <Link to='/'><Button variant="contained" sx={{ background: isDarkMode ? "black" : "#080808" }}>Home</Button></Link>
            <Link to='/collections'><Button variant="contained" sx={{ background: isDarkMode ? "black" : "#080808" }}>My Library</Button></Link>
            <Button variant="contained" sx={{ background: isDarkMode ? "black" : "#080808" }} onClick={handleAddBookClick}>Add New Book</Button>
            {/* { !activeUser ? <Link to='/profile'><Button variant="contained" sx={{ background: isDarkMode ? "black" : "#080808" }}>My Profile</Button></Link> :
            <Link to='/login'><Button variant="contained" sx={{ background: isDarkMode ? "black" : "#080808" }}>Login</Button></Link>}  */}
          </Toolbar>
        </AppBar>
      </Box>
      

    </div>
  );
}
