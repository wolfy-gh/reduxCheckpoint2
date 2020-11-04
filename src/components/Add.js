import React, { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'

function Add() {
    const [inputTodo, setInputTodo] = useState('')
    const add = (e) => {
        e.preventDefault()
        if (inputTodo !== "") {
            dispatch(addTodo(inputTodo))
        }
        setInputTodo('')
    }
    const dispatch = useDispatch()
    return (
        <div className='add'>
            <form >
                <input name="description"
                    type="text"
                    value={inputTodo}
                    onChange={(e) => setInputTodo(e.target.value)}
                    placeholder="What to Do ?" />
                <button onClick={add} style={{color:'black'}}> <AddCircleIcon /></button>
            </form>
        </div>
    )
}

export default Add
