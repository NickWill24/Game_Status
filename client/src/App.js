import { useEffect } from 'react';
import '../src/styles/App.css'
import {GetGames} from './services/rawgservices'
import { Route, Switch } from 'react-router-dom'
import Game from '../src/components/Game'
import GameDetails from '../src/components/GameDetails'

function App() {
useEffect(
  ()=>GetGames()
)
  return (
    <div className="App">
      <h1>Welcome To GameStatus</h1>
      <form>
        <input
        type='type'
        name='search'
        placeholder='Search Game'
        />
      <button>Submit</button>
      </form>
      <Switch>
        <Route exact path='/' component={Game}/>
        <Route path="/:id" component={GameDetails}/>
      </Switch>
    </div>
  );
}

export default App;
