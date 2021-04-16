import styled from 'styled-components'
import {darken} from 'polished'

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 40vh;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button{
    margin-top: 0.8rem;
    width: 12rem ;//1rem = 16px
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #4169E1;
    
    border-radius: 5% ;
    border: none;
    a {
      text-decoration: none;
      color: #FFF;
    }

    transition: background-color 0.2s;

    &:hover{
      background-color: ${darken(0.1, '#4169E1')}
  }
  }
`

