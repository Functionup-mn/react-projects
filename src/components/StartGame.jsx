import styled from 'styled-components';
import {Button} from '../styles/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="/Images/dices.png" alt="dice-logo" />
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>
          Play Now
        </Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
 
max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

.content h1 {
  font-size: 96px;
  white-space: nowrap;
}

.content Button{
  display: flex;
  justify-content: flex-end;
}
`;

