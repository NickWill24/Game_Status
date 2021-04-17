import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getGames } from '../store/actions/GameAction'

const mapStateToProps = ({gameState}) => {
    return  {gameState}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: () => dispatch(getGames())
    }
}

const Game = (props) => {
    useEffect(() => {
        props.fetchGames()
    }, [])
    return (
    <div>
        <h1>Pick a Game to comment About</h1>
        {props.gameState.results? props.gameState.results.map((game, index)=>{
            return(
            <div key={index}>
                <Link to={`/${game.id}`}><img src={game.background_image} alt='Game cover'/></Link>
                <p>{game.name}</p>
            </div>)
        }):<h1>no games</h1>}
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)