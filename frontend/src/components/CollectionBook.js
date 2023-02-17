
import React, { useState, useEffect } from "react";
import "./CollectionBook.css";
import NotesList from "./NotesList";
import { styled, Typography, Card, CardContent, Collapse, IconButton, Box, CardActions, Button, CardMedia, TextField } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// expandable cards set up
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

export default function CollectionBook({ myBooks, setToggle }) {
  const { title, image_url, author, published_year, description, id } = myBooks
  const [noteText, setNoteText] = useState("")
  const [noteArr, setNoteArr] = useState([])
  const [expanded, setExpanded] = useState(false)

  // Handle card collapse functionality
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

useEffect(() => {
  fetch(`http://localhost:9292/collections/${id}/notes`)
    .then((response) => response.json())
    .then((data) => setNoteArr(data.filter(note => note.user_collection_id === id)))
    .catch((error) => console.error("Error:", error));
}, [id])

  // Delete a book from the collection
  function removeBook(id) {
    fetch(`http://localhost:9292/collections/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => setToggle((prev) => !prev))
      .catch((error) => console.error("Error:", error))
  }

  //Post a note to the book
  function handleChange(e) {
    setNoteText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/collections/${id}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        note: noteText,
        reader_id: 9,
        user_collection_id: id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNoteArr((prevNotes) => [...prevNotes, data])
        setNoteText("");
      })
      .catch((error) => console.error("Error:", error))
  }

 // Update /Patch a note
  function handleUpdateNote(updatedNote) {
    const noteIndex = noteArr.findIndex((note) => note.id === updatedNote.id);
    const updatedNotes = [...noteArr];
    updatedNotes[noteIndex] = updatedNote;
    setNoteArr(updatedNotes)
  }

  return (
    <Box m={2} pt={3} width="350px">
      <Card raised
        className="book"
        sx={{
          maxWidth: 350,
          maxHeight: 800,
          margin: "0 auto",
          padding: "0.1em",
          borderRadius: "16px"
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
          <CardContent>
            <Typography className="text"variant="h5">{title}</Typography>
            <Typography className="text"variant="subtitle1">By {author}</Typography>
            <Typography className="text"variant="subtitle1">Published: {published_year}</Typography>
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
              <Typography className="text"gutterBottom variant="body1">{description}</Typography>
              <Button variant="outlined" onClick={(e) => removeBook(id)}>Remove from collection</Button>
            </CardContent>
            </Collapse>
          </Card>
      <br/>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { width: 350 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
      <TextField
        label="Add any book notes"
        type="text"
        name="noteText"
        value={noteText}
        onChange={handleChange}
      />
        <Button variant="contained" sx={{ background: "#080808" }} type="submit">Add Notes</Button>
      </Box>
        <Box m={1} pt={2} width="350px">
          {noteArr.map((note, index) => (
            <NotesList
              key={index}
              note={note}
              bookId={id}
              onUpdateNote={handleUpdateNote}
            />
            ))}
        </Box>
    </Box>
  );
}
