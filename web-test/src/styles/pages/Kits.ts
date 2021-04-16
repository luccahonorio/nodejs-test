import styled from 'styled-components'

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  
  margin-top: 10vh;
  margin-bottom: 0.5rem;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center; 
  flex-direction: column;
  text-decoration: none;


  li{ 
    display: flex;
    align-items: center; 
    justify-content: space-evenly;
    flex-direction: row;
    width: 28rem;
    height: 3rem;
    font-size: 20px;
    margin-top: 1rem;
    list-style: none;
    background-color: #4c8cdc;
    border: 0px solid #000000;
    border-radius: 20px ;
    flex-grow:1;
    padding-right: 5.5rem;
    
    a{
      justify-content: space-around;
      flex-grow:1;
      padding-left: 5.5rem;
      text-decoration: none;
      color: #FFF;
      /* background-color: red; */
    }
  }
  button{
    background-color: #4c8cdc; 
    border: none;
  }
  
`
export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
  color: red;
` 