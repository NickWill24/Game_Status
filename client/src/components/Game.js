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
    return (
    <div>
        {props.gameState.games? props.gameState.games.map((game)=>{
            <div key={game.id}>
                <img src={game.background_image}/>
            </div>
        }):null}
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)