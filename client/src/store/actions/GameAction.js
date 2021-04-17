import { GetGames, GetGame, __SearchGames } from '../../services/rawgservices'
import { __CreateGame, __GetGameBlog, __GetAllGameBlogs  } from '../../services/GameService'
import { GET_GAMES, GET_ONE_GAME, SEARCH_GAME, CREATE_GAME, GET_GAME_BLOG, GET_ALL_GAME_BLOGS } from '../types'
//get list of games from api
export const getGames = () => async (dispatch) => {
    try {
        const games = await GetGames()
        dispatch({
            type: GET_GAMES,
            payload: games
        })
    } catch (error) {
        throw error
    }
}
//search for game
export const searchGames = (formData) => async (dispatch) => {
    try {
        const results = await __SearchGames(formData)
        dispatch({
            type: SEARCH_GAME,
            payload: results
        })
    } catch (error) {
        throw error
    }
}
//get game details with id
export const getGame = (id) => async (dispatch) => {
    try {
        const details = await GetGame(id)
        dispatch({
            type: GET_ONE_GAME,
            payload: details
        })
    } catch (error) {
        throw error
    }
}
//add game to database
export const createGame = (formvalues) => async (dispatch) =>{
    try {
        const newGame = await __CreateGame(formvalues)
        dispatch({
            type: CREATE_GAME, 
            payload: newGame
        })
        console.log(newGame)
        return newGame
    } catch (error) {
        throw error
    }
}
//get Game from Backend and details from rawg api
export const getGameBlog = (id) => async (dispatch) =>{
    try {
        const gameBlog = await __GetGameBlog(id)
        dispatch({
            type: GET_GAME_BLOG, 
            payload: gameBlog
        })
        const details = await GetGame(gameBlog.rawg_id)
        dispatch({
            type: GET_ONE_GAME,
            payload: details
        })
        console.log(gameBlog)
        return gameBlog
    } catch (error) {
        throw error
    }
}

export const getAllGameBlogs = () => async (dispatch) =>{
    try {
        const gameBlogs = await __GetAllGameBlogs()
        dispatch({
            type: GET_ALL_GAME_BLOGS, 
            payload: gameBlogs
        })
        console.log(gameBlogs)
        return gameBlogs
    } catch (error) {
        throw error
    }
}