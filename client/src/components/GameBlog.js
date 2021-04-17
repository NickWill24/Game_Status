import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGameBlog } from '../store/actions/GameAction'


const mapStateToProps = ({ gameState }) => {
    return {gameState}
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchGameBlog: (id) => dispatch(getGameBlog(id))
    }
}

const GameBlog = (props) => {
console.log(props)
    useEffect(() => {
        props.fetchGameBlog(props.match.params.id)
    }, [])



    return (
    <div>
        <h1>Game Blog</h1>
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(GameBlog)