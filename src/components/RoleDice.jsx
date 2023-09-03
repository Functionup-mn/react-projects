import styled from "styled-components";
import { Button, OutlineButton } from "../styles/Button";
import Rules from './Rules'
import { useState } from "react";

const RoleDice = ({ currentDice, roleDice, resetScore }) => {

  const [showRules, setShowRules] = useState(false);    
    
  return (
    <DiceContainer>
      <div>
        <img
          onClick={roleDice}
          src={`/Images/dice/dice_${currentDice}.png`}
          alt="dice_1"
        />
      </div>
      <p>Click on Dice to roll</p>
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={()=> setShowRules(prev => !prev)} >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      <div className="rulesContainer">
      { showRules && <Rules/>}
      </div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & :hover {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
  .btn{
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 60px;
  }
  .rulesContainer{
    padding-top: 64px;
  }
`;
