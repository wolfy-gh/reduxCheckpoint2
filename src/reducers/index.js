import {combineReducers} from 'redux'
import addTodo from './todoReducer'

const AllReducers = combineReducers({
    addTodo : addTodo,
})

export default AllReducers