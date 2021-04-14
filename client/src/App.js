import { useEffect } from 'react';
import '../src/styles/App.css'
import {GetGames} from './services/rawgservices'

function App() {
useEffect(
  ()=>GetGames()
)
  return (
    <div className="App">
      <h1>Welcome To GameStatus</h1>
    </div>
  );
}

export default App;
