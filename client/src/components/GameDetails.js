import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGame } from '../store/actions/GameAction'
import { createPost } from '../store/actions/PostAction'


const mapStateToProps = ({ gameState }) => {
    return {gameState}
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchGame: (id) => dispatch(getGame(id)),
        makePost: (formvalues)=> dispatch(createPost(formvalues))
    }
}

const Details = (props) => {
    console.log(props.gameState.details.background_image)
    useEffect(() => {
        props.fetchGame(props.match.params.id)
    }, [props.match.params.id])

const handleSubmit = async (e) => {
    e.prevent.default() 
    props.makePost({
        comments: props.gameState.comments
    })
}

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
            name='Comments'
            value={props.comments}
            placeholder='Write a comment'
            // onChange={(e)=>{props.makePost(e.target.value)}}
            />
            <button onClick={(e)=>{handleSubmit(e)}} >Post</button>
        </form>
        </section>
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)