import React from 'react'
import '../App.css'

function Filter({setFilter}) {
    const handleChange =(e) => {
        setFilter(e.target.value)
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value='all'>All</option>
                <option value='done'>Done</option>
                <option value='notdone'>Not Done</option>
            </select>
        </div>
    )
}

export default Filter
