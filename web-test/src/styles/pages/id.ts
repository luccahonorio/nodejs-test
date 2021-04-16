import styled from 'styled-components'

export const Label = styled.label`
  margin-top: 3rem;
  font-size: 3rem;
  color: #4c8cdc;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Ul = styled.ul`
  display: flex;
  align-items: center; 
  flex-direction: column;
  text-decoration: none;


  li{
    list-style: none;
    margin-top: 2rem;

    span{
      display: flex;
      justify-content:center;
      flex-direction: column;
      margin: 0.5rem 0.5rem
    }
    form{
      display: flex;
      flex-direction: column;
      margin-left: 0.4rem;
      label{

      }
      input{
        margin-top: 5px;
        width:12rem;
        height:2rem;
        border-radius: 5px; 
        border: 1px solid #000000;
      }
      button{
        margin-top: 5px;
        width:5rem;
        height:2rem;
        padding: 5px;
        background-color: #4c8cdc;
        color: #FFF;
        border: 0px;
      }
    }
  }
  
`