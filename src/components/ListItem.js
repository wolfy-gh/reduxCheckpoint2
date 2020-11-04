import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

function ListItem({filter}) {
    const Data = useSelector(state => state.addTodo)
    console.log(Data)
    const [newData , setNewData]= useState([])
    useEffect(() => {
        switch(filter){
            case "all" :
                return setNewData(Data)
            case "done" : 
                return setNewData(Data.filter(el => el.isDone === true))
            case "notdone" :
                return setNewData(Data.filter(el => el.isDone === false))
            default : 
                return setNewData(Data)
        }
    }, [filter,Data])
    console.log(newData)
    return (
        <div>
            {newData.map(el => {return <Item key={el.id} id={el.id} description={el.description} Done={el.isDone}/> })}
            
        </div>
    )
}

export default ListItem
