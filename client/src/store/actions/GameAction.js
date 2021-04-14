import {GetGames} from '../../services/rawgservices'
import { GET_GAMES } from '../types'


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