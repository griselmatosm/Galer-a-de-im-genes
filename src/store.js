import {createStore} from 'redux';

const initialState = {
    images: [],
    favorites: []
}

const reducerBoard = (state = initialState, action) => {
    return state
}

export default createStore(reducerBoard);