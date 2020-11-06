import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTodo } from '../actions'
import '../App.css'

function Edit({ id, description }) {
  const [show, setShow] = useState(false);
  const handleClose = () =>{
    setShow(false);
    setEditinput(description)
    }
  const handleShow = () => setShow(true);

  const [editinput, setEditinput] = useState(description)

  const handleChange = (e) => {
    setEditinput(e.target.value)
  }
  const dispatch = useDispatch()

  var newInput = {
    id: id,
    newinput: editinput
  }
  const edit = (e) => {
    e.preventDefault()
    if (editinput !== '') {
      dispatch(editTodo(newInput))
      handleClose()
    }
  }
  return (
    <>
      <button onClick={handleShow} >
        <EditIcon style={{ color: "rgb(29, 133, 29)" }} />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="modal_edit">
          <>
          <form>
            <input type="text" placeholder={description} onChange={handleChange} value={editinput} className='input_edit' />
            <button onClick={edit}><DoneAllIcon style={{ color: "rgb(29, 133, 29)" }} type="submit" /></button>
          </form>
          </>
          <button onClick={handleClose}><CloseIcon style={{ color: "rgb(172, 79, 79)" }} /></button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Edit
