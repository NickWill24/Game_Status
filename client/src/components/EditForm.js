import React from 'react'
import { connect } from 'react-redux'
import { handlePost, updatePost, getPostById } from '../store/actions/PostAction'
const mapStateToProps = ({ gameState, postState }) => {
    return { gameState, postState }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (formData) => dispatch(handlePost(formData)),
        editPost: (formData, id) => dispatch(updatePost(formData, id)),
        getThisPost: (id) => dispatch(getPostById(id))
    }
}
const EditForm = (props) => {
    const thisPost = props.postState.currentPost.data
    const handleChange = (event) => {
        props.handleInput(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        let formData = {
            comments: props.postState.comment
        }
        try {
            await props.editPost(formData, props.match.params.id)
        } catch (error) {
            throw error
        }
        props.handleInput('')
        props.history.push(`/games/${props.gameState.gameblog.id}`)
    }
    React.useEffect(() => {
        props.getThisPost(props.match.params.id)
    }, [])
    return (
        <div>
            <h3>edit your comment</h3>
            {props.postState.currentPost.data ?
                <div>
                    <p>Posted by: {thisPost.user_name}</p>
                    <p>Comment: {thisPost.comment}</p>
                </div>
                : null}
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="searchBar"
                    type="text"
                    autoComplete="off"
                    name="search"
                    value={props.postState.comment}
                    onChange={handleChange}
                />
                <button type="submit">update</button>
            </form>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm)