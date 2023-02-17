//import { Modal } from '@mui/material'
import React from 'react'
import './AddBookForm.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export default function AddBookForm({ showModal, newBook, handleFormSubmit, handleInputChange, closeModal }) {
  return (
    
    <Modal show={showModal} onHide={closeModal} className="modal">
      <Modal.Header>
            <Modal.Title className="modal-title">Add New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
              <form className='modal-form'>
                <label>
                  Title:
                  <input className="title-input"type="text" name="title" value={newBook.title} onChange={handleInputChange} />
                </label>
                <label>
                  Author:
                  <input className="author-input"type="text" name="author" value={newBook.author} onChange={handleInputChange} />
                </label>
                <label>
                  Image:
                  <input className="img-input"type="text" name="image_url" value={newBook.image_url} onChange={handleInputChange}/>
                </label>
                <label>
                  Published Year:
                  <input className="pub-input"ype="text" name="published_year" value={newBook.published_year} onChange={handleInputChange} />
                </label>
                <label>
                  Description:
                  <textarea className="desc-input"name="description" value={newBook.description} onChange={handleInputChange} />
                </label>
              </form>
                <Modal.Footer>
    <Button variant="secondary" onClick={closeModal}>
      Close
    </Button>
    <Button type="submit" variant="primary" onClick={handleFormSubmit} >
      Add Book
    </Button>
  </Modal.Footer>
      </Modal.Body>
    </Modal>
   
  
  )
}

