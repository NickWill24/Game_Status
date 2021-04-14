import { connect } from 'react-dom'
import { getGame } from '../store/actions/GameAction'
import React, { useEffect } from 'react'

const mapStateToProps = ({ gameState }) => {
    return {gameState}
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchGame: (id) => dispatch(getGame(id))
    }
}

const Details = (props) => {
    const id = props.match.params.id
    console.log(props.game.details)
    useEffect(() => {
        props.fetchGame(props.match.params.id)
      //eslint-disable-next-line
    }, [props.match.params.id])
    return (
    <div>
        <h1>Details</h1>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)