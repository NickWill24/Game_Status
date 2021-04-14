import { useEffect } from 'react';
import '../src/styles/App.css'
import {GetGames} from './services/rawgservices'
import { Route, Switch } from 'react-router-dom'

function App() {
useEffect(
  ()=>GetGames()
)
  return (
    <div className="App">
      <h1>Welcome To GameStatus</h1>
      <Switch>
        <Route exact path='/' component={Game}/>
      </Switch>
    </div>
  );
}

export default App;
