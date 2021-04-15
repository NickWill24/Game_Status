import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGame } from '../store/actions/GameAction'

const mapStateToProps = ({ gameState }) => {
    return {gameState}
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchGame: (id) => dispatch(getGame(id))
    }
}

const Details = (props) => {
    // const id = props.match.params.id
    console.log(props.gameState.details.background_image)
    useEffect(() => {
        props.fetchGame(props.match.params.id)
    }, [props.match.params.id])
    return (
    <div>
        <h1>Details</h1>
        <img src={props.gameState.details.background_image}/>
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)