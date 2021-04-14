import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { GetGames } from '../services/rawgservices'

const mapStateToProps = ({ gameState }) => {
    return { gameState }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: () => dispatch(GetGames())
    }
}

const Game = (props) => {
    useEffect(() => {
        props.fetchGames()
      //eslint-disable-next-line
    }, [])
    return (
    <div>
        {/* {props.gameState.games.map((game) => (
            <div key={game.id}>
                <Link to={`/${game.id}`}><img  src={`https://api.rawg.io/api/games?${result}`}></img></Link>
            </div>
        ))} */}
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)