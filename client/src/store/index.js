import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import GameReducer from './reducers/GameReducer'
import PostReducer from './reducers/PostReducers'
import AuthReducer from './reducers/AuthReducer'

const store = createStore(
    combineReducers({
        gameState:GameReducer,
        postState:PostReducer,
        AuthState:AuthReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
    )
    
    export default store