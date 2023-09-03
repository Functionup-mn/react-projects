import styled from 'styled-components'

export const Button = styled.button`
padding: 10px 18px;
width: 220px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:10px;

background-color:black;
color: white;
border-radius:5px;
font-size: 16px;
/* border: 1px solid transparent; */
cursor: pointer;
transition: 0.3s background ease-in;


&:hover {
 background-color: white;
 border: 1px solid black;
 color: black;
 transition: 0.2s background ease-in;
}
`

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
 background-color: black;
 border: 1px solid black;
 color: white;
}
   
`