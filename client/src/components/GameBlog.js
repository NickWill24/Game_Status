import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGameBlog } from '../store/actions/GameAction'
import { createPost, deletePost, handlePost } from '../store/actions/PostAction'



const mapStateToProps = ({ gameState, postState, AuthState }) => {
    return {gameState,postState, AuthState}
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchGameBlog: (id) => dispatch(getGameBlog(id)),
        makePost: (formValue) => dispatch(createPost(formValue)),
        removePost: (id) => dispatch(deletePost(id)),
        handleInput: (formValue) => dispatch(handlePost(formValue))
    }
}

const GameBlog = (props) => {
    // console.log(props.authState.currentUser)
    const handleChange= (e) =>{
        props.handleInput(e.target.value)
    }
    const handleSubmit = async () =>{
        console.log(props.AuthState)
        let myPost= {
            comments:props.postState.comment,
            game_id:props.match.params.id,
            user_name: props.AuthState.currentUser.name
        }
        await props.makePost(myPost)
        await props.fetchGameBlog(props.match.params.id)
        props.handleInput('')
    }
    const handleDelete = async (id) =>{
        console.log('Here', id)
        try {
            await props.removePost(id)
            await props.fetchGameBlog(props.match.params.id)
        } catch (error) {
            throw error
        }
    }
    const handleEdit = (id) =>{
        console.log(id)
        props.history.push(`/posts/edit/${id}`)
    }

    useEffect(() => {
        props.fetchGameBlog(props.match.params.id)
    }, [])


    return (
    <div>
        <h1>Game Blog</h1>
        {props.gameState.details ? 
            <div>
                <h2>{props.gameState.details.name}</h2>
                <img style={{width: '50%'}} src={props.gameState.details.background_image}></img>
            </div>
        : null}
            <h1>Comments</h1>
            <input
            type='text'
            name="post"
            value={props.postState.comment}
            placeholder='Write a Comment'
            onChange={(e)=>{handleChange(e)}}
            />
            <button onClick={()=>{handleSubmit()}}>Post</button>
            {props.gameState.gameblog.posts ?
            <div>
                {props.gameState.gameblog.posts.map((post, index) =>(
                    <div key={index}>
                        <p>{post.user_name}</p>
                        <p>{post.comments}</p>
                        {props.AuthState.currentUser.name === post.user_name ? 
                        <div>
                            <button onClick={()=>handleDelete(post.id)}>X</button>
                            <button onClick={()=>handleEdit(post.id)}>Edit</button>
                        </div>
                        : null}
                    </div>
                ))}
                </div> : null}
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(GameBlog)