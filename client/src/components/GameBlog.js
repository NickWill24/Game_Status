import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGameBlog } from '../store/actions/GameAction'
import { createPost, deletePost, handlePost } from '../store/actions/PostAction'


const mapStateToProps = ({ gameState, postState }) => {
    return {gameState,postState}
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchGameBlog: (id) => dispatch(getGameBlog(id)),
        makePost: (formValue) => dispatch(createPost(formValue)),
        // removePost: (id) => dispatch(deletePost(id)),
        handleInput: (formValue) => dispatch(handlePost(formValue))
    }
}

const GameBlog = (props) => {
//update when auth works 
    let testUser = 'Mike'
    console.log(props)
    const handleChange= (e) =>{
        props.handleInput(e.target.value)
    }
    const handleSubmit = () =>{
        let myPost= {
            comments:props.postState.comment,
            game_id:props.match.params.id,
            user_name: testUser
        }
        props.makePost(myPost)
    }

    useEffect(() => {
        props.fetchGameBlog(props.match.params.id)
    }, [])


    return (
    <div>
        <h1>Game Blog</h1>
        
            <input
            type='text'
            name="post"
            value={props.postState.comment}
            placeholder='Write a Comment'
            onChange={(e)=>{handleChange(e)}}
            />
            <button onClick={()=>{handleSubmit()}}>Post</button>
        
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(GameBlog)