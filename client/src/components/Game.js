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
      //eslint-disable-next-line
    }, [])
    console.log(props.gameState.games)
    return (
    <div>
        <h1>Pick a Game to comment About</h1>
        {props.gameState.games? props.gameState.games.map((game)=>{
            return(
            <div key={game.id}>
                <Link to={`/${game.id}`}><img src={game.background_image}/></Link>
                <p>{game.name}</p>
            </div>)
        }):<h1>no games</h1>}
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)