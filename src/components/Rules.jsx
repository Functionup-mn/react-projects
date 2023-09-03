import styled from 'styled-components'
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div>
    <p>Select any number</p>

    <p>Click on dice image</p>

    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>

    <p>if you get wrong guess then  2 point will be dedcuted </p>

      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #FBF1F1;
    padding: 20px;
    gap: 24px;

    h2{
      font-size: 24px;
    }

    p{
      font-size: 16px;
      font-weight: 500;
    }
`
