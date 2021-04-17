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
        removePost: (id) => dispatch(deletePost(id)),
        handleInput: (formValue) => dispatch(handlePost(formValue))
    }
}

const GameBlog = (props) => {
//update when auth works 
    let testUser = 'Mike'
    console.log(props.gameState.gameblog)
    const handleChange= (e) =>{
        props.handleInput(e.target.value)
    }
    const handleSubmit = async () =>{
        let myPost= {
            comments:props.postState.comment,
            game_id:props.match.params.id,
            user_name: testUser
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
                        <button onClick={()=>handleDelete(post.id)}>X</button>
                        <button onClick={()=>handleEdit(post.id)}>Edit</button>
                    </div>
                ))}
                </div> : null}
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(GameBlog)