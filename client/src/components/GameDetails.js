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
    console.log(props.gameState.details.background_image)
    useEffect(() => {
        props.fetchGame(props.match.params.id)
    }, [props.match.params.id])
    return (
    <div>
        <h1>Details</h1>
        <p>{props.gameState.details.name}</p>
        <p>{props.gameState.details.description_raw}</p>
        <p>{props.gameState.details.rating}</p>
        <img src={props.gameState.details.background_image}/>
        <section>
                    <form>
            <input
            type='type'
            name='Comment'
            placeholder='Write a comment'
            />
            <button>Post</button>
        </form>
        </section>
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)