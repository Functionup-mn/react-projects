import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import {useState} from 'react'

const GamePlay = () => {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState();
    
    const genrateRandomNumber = (max, min) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const roleDice = () =>{
        if(!selectedNumber){
            setError('You have not selected any number')
            return;
        }
        const randomNumber = genrateRandomNumber(1,7)
        setCurrentDice( randomNumber)

        if(selectedNumber === randomNumber){
            setScore((prev)=> prev + randomNumber)
        }else{
            setScore((prev)=> prev - randomNumber)
        }
        setSelectedNumber(undefined)
    }

    const resetScore = () =>{
        setScore(0)
    }
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score= {score} />
        <NumberSelector
         error={error}
         setError={setError}
         selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice resetScore={resetScore} currentDice={currentDice} roleDice={roleDice}/>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
padding: 70px;
  .top_section{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  `;
