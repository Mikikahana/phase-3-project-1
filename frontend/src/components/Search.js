import React from 'react';
// import './Search.css'
import { AppBar, Box, InputBase, Input, Toolbar, Typography, Button, Grid } from "@mui/material"
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

// search bar styling
const MaterialSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '500px',
    },
  }))
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '20ch',
        }
      }
    }
  }))

function Search({search, setSearch}) {

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <MaterialSearch>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search by Author or Title"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={handleSearch}
              />
          </MaterialSearch>
        )
}

export default Search;