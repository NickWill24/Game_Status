import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getGame, createGame } from '../store/actions/GameAction'


const mapStateToProps = ({ gameState }) => {
    return {gameState}
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchGame: (id) => dispatch(getGame(id)),
        makeGame: (formData) => dispatch(createGame(formData))
    }
}

const GameDetails = (props) => {
    let test = ''
    const[toggle, setToggle]= useState(false)
    const handleDelay= async () =>{
        if (props.gameState.details.length){
            test = props.gameState.details.genres[0].name
            return test
        } else {
            console.log('waiting')
        }
    }
    const createGame = async () =>{
        let newGame= {
            name: props.gameState.details.name,
            rating: parseInt(props.gameState.details.rating),
            category: test,
            esrb_rating: 'test',
            rawg_id: props.match.params.id,
            pic: props.gameState.details.background_image,
        }
        try {
            await props.makeGame(newGame)
        } catch (error) {
            throw error
        }
        setToggle(true)
    }
    const startTalking = (e) =>{
        console.log(e.target.value)
        props.history.push(`/games/${e.target.value}`)
    }
    useEffect(() => {
        props.fetchGame(props.match.params.id)
        handleDelay()
    }, [props.match.params.id])



    return (
    <div>
        {props.gameState.details ?
        <div>
            <h1>Details</h1>
            <p>{props.gameState.details.name}</p>
            <p>{props.gameState.details.description_raw}</p>
            <p>{props.gameState.details.rating}</p>
            <img style={{width: '50%'}} src={props.gameState.details.background_image}/>
                    {toggle ?
                        <button className="go-to" value={props.gameState.newgame.data.id} onClick={(e) => startTalking(e)}>Start Talking!</button>
                        :
                        <button className="talk-about-button" onClick={() => createGame()}>Talk About This Game?</button>
                    }
        </div>
        :
        null
    }
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(GameDetails)