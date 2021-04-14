import Client from "."

const API_KEY= process.env.REACT_APP_RAWG_KEY

export const GetGames = async () => {
try {
    const res= await Client.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`)
    console.log(res.data)
} catch (error) {
    throw error
    }
}

export const GetGame = async (id) => {
try {
    const res = await Client.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    console.log(res.data)
} catch (error) {
    throw error
}
}