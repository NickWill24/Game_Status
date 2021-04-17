import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handlePost, updatePost } from '../store/actions/PostAction'
const mapStateToProps = ({ gameState, postState }) => {
    return { gameState, postState }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (formData) => dispatch(handlePost(formData)),
        editPost: (formData, id) => dispatch(updatePost(formData, id))
    }
}
const EditForm = (props) => {
    console.log('FORM', props)
    const handleChange = (event) => {
        props.handleInput(event.target.value)
    }
    const handleSubmit =  async (event) => {
        event.preventDefault()
        console.log('test')
        let formData={
            comments: props.postState.comment
        }
        try {
            await props.editPost(formData, props.match.params.id)
        } catch (error) {
            throw error 
        }
    }
    return (
        <div>
            <h3>Edit your Post</h3>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="searchBar"
                    type="text"
                    autoComplete="off"
                    name="search"
                    value={props.postState.comments}
                    onChange={handleChange}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm)