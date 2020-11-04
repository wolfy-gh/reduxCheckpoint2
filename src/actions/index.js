export const addTodo = (input) => {
    return {
        type : 'ADD_TODO',
        playload : input ,
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        playload :id
    }
}
export const isDone =(id) => {
    return {
        type : 'IS_DONE',
        playload :id
    }
}
export const editTodo= (newinput) => {
    return {
        type :'EDIT_TODO',
        playload :newinput
    }
}