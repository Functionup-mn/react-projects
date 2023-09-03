import styled from 'styled-components';
const NumberSelector = ({selectedNumber, setSelectedNumber, error, setError}) => {
    const arr = [1,2,3,4,5,6]

    const numberSelectorHandler = (value) =>{
         setSelectedNumber(value)
         setError('')
    }

  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className='flex'>
        {arr.map((value, i)=>
           <Box
            isSelected ={value === selectedNumber}
            key={i}
            onClick={()=> numberSelectorHandler(value)}
            >{value}</Box>
        )}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 30px;
    .flex {
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
        display: flex;
        justify-content: flex-end;
    }
    .error{
        color: red;
        font-size: 24px;
        font-weight: 500;
    }
`

const Box = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props)=> props.isSelected ? 'black' : 'white'};
    color: ${(props)=> !props.isSelected ? 'black' : 'white'};
`
