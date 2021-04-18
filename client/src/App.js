import { useEffect } from 'react';
import '../src/styles/App.css'
import { NavLink, Route, Switch } from 'react-router-dom'
import Game from '../src/components/Game'
import GameDetails from '../src/components/GameDetails'
import loginForm from '../src/components/LoginForm'
import Form from './components/Form'
import GameBlog from './components/GameBlog'
import EditForm from './components/EditForm';
import Top from './components/Top'
import SignupForm from './components/SignupForm';
import { userSession ,logOut } from './store/actions/AuthAction'
import { connect } from 'react-redux'

const mapStateToProps = ({AuthState}) => {
  return  {AuthState}
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkSession: (token) => dispatch(userSession(token)),
    logout: () => dispatch(logOut())
  }
}

const App = (props) => {
  console.log(props.AuthState.currentUser)
  const logOutUser= (e) =>{
    e.preventDefault()
    localStorage.removeItem('token')
    props.logout()
  }
useEffect(()=>{
  let token = localStorage.getItem('token')
  props.checkSession(token)
},[])

  return (
    <div className="App">
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          {props.AuthState.authenticated ?
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100vw'}}>
            {props.AuthState.currentUser === ''? 
            null
            
            : <p>Hello {props.AuthState.currentUser.name}</p>}
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/blogs/all'>Top Game Blog Posts</NavLink>
            <NavLink to='/'><p onClick={(e)=>logOutUser(e)}>LogOut</p></NavLink>
          </div>
          : 
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100vw'}}>
            <NavLink to='/auth/loginform'>Login</NavLink>
            <NavLink to='/auth/signupform'> Sign Up</NavLink>
          </div>}
        </div>
      <h1>Welcome To GameStatus</h1>
      <Form/>
      <Switch>
        <Route exact path='/' component={Game}/>
        <Route exact path="/:id" component={GameDetails}/>
        <Route exact path='/auth/loginform' component={loginForm}/>
        <Route exact path='/games/:id' component={GameBlog}></Route>
        <Route exact path='/posts/edit/:id' component={EditForm}/>
        <Route exact path='/blogs/all' component={Top}/>
        <Route exact path='/auth/signupform' component={SignupForm}/>
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
