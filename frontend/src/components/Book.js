import React, { useState } from 'react'
import { styled, Typography, Card, CardContent, Collapse, IconButton, Box, CardActions, Button, CardMedia } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// globally setting up expandable cards
const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  })
}))

function Book({book,handleAddToCollection}) {
    const {image_url, title, author, published_year, description} = book
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
      setExpanded(!expanded)
    }

  return (
    <Box width="350px" >
      <Card
      className="book"
        raised
        sx={{
          maxWidth: 300,
          maxHeight: 1000,
          margin: "0 auto",
          padding: "0.1em",
          borderRadius: "16px",
          marginBottom: "10%"
        }}
        >
        <CardMedia
          component="img"
          height="250"
          image={image_url}
          alt="book cover image"
          sx={{ objectFit: "contain" }}

        >
        </CardMedia>

          <CardContent >
            <Typography  className='text' variant="h5">{title}</Typography>
            <Typography className='text' variant="subtitle1">By {author}</Typography>
            <Typography className='text' variant="subtitle1">Published : {published_year}</Typography>
          </CardContent>
          <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          </CardActions>
          <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
          <CardContent>
            <Typography className='text'gutterBottom variant="body1">{description}</Typography>
            <Button variant="outlined" onClick={() => handleAddToCollection(book)}>Add to my Library</Button>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
   )
}

export default Book