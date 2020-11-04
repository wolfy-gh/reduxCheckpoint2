import React from 'react'
import Edit from './Edit'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../App.css'
import { useDispatch } from 'react-redux'
import {deleteTodo,isDone} from '../actions'


function Item({id,description,Done}) {
    const dispatch = useDispatch()
    
    return (
        <div className="item">
            <h5 style={Done ?  {textDecoration: 'line-through'} :  {textDecoration: 'none'}}>{description}</h5>
            <div>
                <button onClick={() => dispatch(isDone(id))} >{Done ? <CheckBoxIcon style={{color:"rgb(45, 45, 112)"}} /> :<IndeterminateCheckBoxIcon style={{color:"rgb(74, 74, 160)"}}/>}</button>
                <Edit id={id} description={description} Done={Done}/>
                <button onClick={()=> dispatch(deleteTodo(id))} ><DeleteForeverIcon style={{color:"rgb(172, 79, 79)"}}  /></button>
            </div>
        </div>
    )
}

export default Item
