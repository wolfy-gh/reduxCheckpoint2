const todoReducer = (state =[], action ) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {id:Math.random(), description : action.playload , isDone : false}]
        case 'DELETE_TODO':
            return state.filter(el => el.id !== action.playload)
        case 'IS_DONE' :
            return state.map(el => el.id === action.playload ? {...el,isDone : !el.isDone} : el)
        case 'EDIT_TODO' :
            return state.map(el => el.id === action.playload.id ? {...el, description : action.playload.newinput}: el)
        default : 
            return state
    }
}
export default todoReducer