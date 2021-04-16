const {GET_ONE_GAME, GET_GAMES , SEARCH_GAME, CREATE_GAME, GET_GAME_BLOG}= require('../types')

const iState = {
    details:{},
    results:[],
    newgame:{},
    gameblog:{}
}

const GameReducer = (state = iState, action) => {
    switch (action.type) {
    case GET_GAMES:
        return {...state, results: action.payload}
    case GET_ONE_GAME:
        return{...state, details: action.payload}
    case SEARCH_GAME:
        return{...state, results: action.payload}
    case CREATE_GAME:
        return{...state, newgame: action.payload}
    case GET_GAME_BLOG:
        return{...state, gameblog: action.payload}
    default:
        return {...state}
    }
}
export default GameReducer