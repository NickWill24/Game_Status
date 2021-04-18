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
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}} >
        {props.gameState.allBlogs ? 
        props.gameState.allBlogs.map((blog, index)=>(
            <Link style={{WebkitBoxShadow: '0px 5px 10px 0px rgba(0,0,0,0.5)',background: 'black', width: '300px', height: '200px', margin: '10px', color: 'white', padding: '10px', borderRadius:'10px'}} key={index} to={`/games/${blog.id}`}>
                <img style={{borderRadius: '10px' ,width: '100%', maxHeight:'165px', overflow: 'hidden'}}  src={blog.pic}/>
                <h4>{blog.name}</h4>
            </Link>
        ))
        : null}
        </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)