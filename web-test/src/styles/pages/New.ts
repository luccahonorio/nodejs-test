import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;

label{
  color: #4c8cdc;
}
input{
  margin-top: 0.2rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #000000;
  margin-right: 1rem;
}
button{
  width:5rem;
  height:2rem;
  padding: 5px;
  background-color: #4c8cdc;
  color: #FFF;
  border: 0px;
}
`
export const Label = styled.label`
  margin-top: 3rem;
  font-size: 3rem;
  color: #4c8cdc;
`