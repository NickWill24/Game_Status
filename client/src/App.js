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

const App = () => {

  return (
    <div className="App">
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/loginForm'>Login</NavLink>
          <NavLink to='/blogs/all'>Top Game Blog Posts</NavLink>
          {/* <NavLink>Sign up</NavLink> */}
        </div>
      <h1>Welcome To GameStatus</h1>
      <Form/>
      <Switch>
        <Route exact path='/' component={Game}/>
        <Route exact path="/:id" component={GameDetails}/>
        <Route exact path='/login' component={loginForm}/>
        <Route exact path='/games/:id' component={GameBlog}></Route>
        <Route exact path='/posts/edit/:id' component={EditForm}/>
        <Route exact path='/blogs/all' component={Top}/>
      </Switch>
    </div>
  );
}

export default App;
