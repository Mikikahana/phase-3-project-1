import React from 'react'
// import './Book.css'
import { Typography, Card, CardContent, Box, CardActions, Button, CardMedia } from '@mui/material'

function Book({book,handleAddToCollection}) {
    const {image_url, title, author, published_year, description} = book

  return (
    <Box width="350px">
      <Card
        raised
        sx={{
          maxWidth: 280,
          margin: "0 auto",
          padding: "0.1em",
          borderRadius: "15px"
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={image_url}
          alt="book-image"
          sx={{ objectFit: "contain" }}
        >

        </CardMedia>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">By {author}</Typography>
            <Typography variant="subtitle2">Published : {published_year}</Typography>
            <Typography gutterBottom variant="body1">{description}</Typography>
            <Button variant="outlined" onClick={() => handleAddToCollection(book)}>Add to my Library</Button>
          </CardContent>
      </Card>
    </Box>
      )
}

export default Book