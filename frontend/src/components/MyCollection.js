import React,{useState,useEffect} from 'react'
import CollectionBook from './CollectionBook'
import { Typography, Card, CardContent, Box, Grid, Button, CardMedia } from '@mui/material'

export default function MyCollection({collection, setCollection}) {
  const [toggle, setToggle] = useState(true)
  // const [bookList, setBookList] = useState([])


  useEffect(() => {
      fetch(`http://localhost:9292/collections`,)
      .then(response => response.json())
      .then(data => setCollection(data))
    },[toggle,setCollection])

  return (
    <Box m={2} pt={3}>
      <h1>My Collection </h1>
      <Grid 
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {collection.map((myBooks,index) => (
            <CollectionBook
            myBooks={myBooks}
            key={index}
            setToggle={setToggle}
            />
        ))}
      </Grid>
    </Box>
  )
}
