const {GET_GAME, GET_GAMES}= require('../types')

const iState = {
    games= [],
    details=''
}

const GameReducer = (state = iState, action) => {
    switch (action.type) {
    case GET_GAMES:
        return {...state, games: action.payload }
    case GET_GAME:
        return{...state, games: action.payload}
    default:
        return {...state}
    }
}
export default GameReducer