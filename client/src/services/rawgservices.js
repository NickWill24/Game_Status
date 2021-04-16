import Axios from 'axios'
const API_KEY= process.env.REACT_APP_RAWG_KEY
export const GetGames = async () => {
try {
    const res= await Axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`)
    console.log(res.data.results)
    return res.data.results
} catch (error) {
    throw error
    }
}
export const __SearchGames = async (formData) => {
    console.log(formData)
    try {
        const res= await Axios.get(`https://rawg.io/api/games?search=${formData}key=${API_KEY}`)
        console.log('RESULTS', res.data.results)
        return res.data.results
    } catch (error) {
        throw error
        }
}
export const GetGame = async (id) => {
try {
    const res = await Axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    console.log('details', res.data)
    return res.data
} catch (error) {
    throw error
}
}