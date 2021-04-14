import {GetGames, GetGame} from '../../services/rawgservices'
import { GET_GAMES, GET_GAME } from '../types'


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

export const getGame = (id) => async (dispatch) =>{
    try {
        const details = await GetGame(id)
        dispatch({
            type: GET_GAME,
            payload: details
        })
    } catch (error) {
        throw error
    }
}