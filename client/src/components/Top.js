import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getAllGameBlogs } from '../store/actions/GameAction'

const mapStateToProps = ({gameState}) => {
    return  {gameState}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllGameBlogs: () => dispatch(getAllGameBlogs())
    }
}

const Top = (props) => {
    useEffect(() => {
        props.fetchAllGameBlogs()
    }, [])
    console.log(props.gameState.allBlogs)
    return (
    <div>
        <h1>Games People are Talking About</h1>
        {props.gameState.allBlogs ? 
        props.gameState.allBlogs.map((blog, index)=>(
            <Link key={index} to={`/games/${blog.id}`}>
                <img src={blog.pic} style={{ width: '50%'}}/>
                <h4>{blog.name}</h4>
            </Link>
        ))
        : null}
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)