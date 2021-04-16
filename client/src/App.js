import { useEffect } from 'react';
import '../src/styles/App.css'
import { NavLink, Route, Switch } from 'react-router-dom'
import Game from '../src/components/Game'
import GameDetails from '../src/components/GameDetails'
import loginForm from '../src/components/LoginForm'
import Form from './components/Form'


const App = () => {

  return (
    <div className="App">
      <nav>
        <ul>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/loginForm'>
            <li>Login</li>
          </NavLink>
          <li>Sign up</li>
        </ul>
      </nav>
      <h1>Welcome To GameStatus</h1>
      <Form/>
      <Switch>
        <Route exact path='/' component={Game}/>
        <Route exact path="/:id" component={GameDetails}/>
        <Route exact path='/login' component={loginForm}/>
      </Switch>
    </div>
  );
}

export default App;
