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
        <div style={{width:'100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Pick a Game to comment About</h1>
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                {props.gameState.results? props.gameState.results.map((game, index)=>{
                    return(
                    <div  style={{WebkitBoxShadow: '0px 5px 10px 0px rgba(0,0,0,0.5)',background: 'black', width: '300px', height: '200px', margin: '10px', color: 'white', padding: '10px', borderRadius:'10px'}} key={index}>
                        <Link to={`/${game.id}`}><img style={{borderRadius: '10px' ,width: '100%', maxHeight:'165px', overflow: 'hidden'}} src={game.background_image} alt='Game cover'/></Link>
                        <p>{game.name}</p>
                    </div>)
                }):<h1>no games</h1>}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)