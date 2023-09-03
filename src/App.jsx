import { useState } from 'react';
import './App.css';
import StartGame from "./components/StartGame";
import GamePlay from './components/GamePlay';

function App() {
 
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleFunction = () =>{
    setIsGameStarted((perv)=> !perv)
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay/> : <StartGame toggle= {toggleFunction}/>
      }  
    </>
  )
}

export default App
