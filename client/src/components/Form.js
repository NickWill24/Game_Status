import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchGames } from '../store/actions/GameAction'
const mapStateToProps = ({ gameState }) => {
  return { gameState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    search: (formData) => dispatch(searchGames(formData))
  }
}
const Form = (props) => {
  console.log('FORM', props)
  const [searchWord, setSearchWord] = React.useState("")
  const handleChange=(event) => {
    setSearchWord(event.target.value)
  }
  const handleSubmit=(event) => {
    event.preventDefault()
    props.search(searchWord)
  }
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="searchBar"
        type="text"
        autoComplete="off"
        name="search"
        value={searchWord}
        onChange={handleChange}
      />
      <button type="submit">search</button>
    </form>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)