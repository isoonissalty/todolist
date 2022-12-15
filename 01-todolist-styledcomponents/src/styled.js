import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TodoContainer = styled.div`
  width: 50%;
  height: 60vh;
  background-color: #EEE;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.25);
  padding: 1rem;
`

export const InputSection = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `

  export const TodoSection = styled.div`
  height: calc( 60vh - 100px );
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`

export const Input = styled.input`
  width: 60%;
  height: 4vh;
  margin: 1rem 2rem;
  padding: .25rem .5rem;
  border-radius: 6.28px;
  font-size: 2rem;
  text-align: center;
  border: 4px none #8842d5;

  &:focus {
    outline-offset: 0;
    outline: -webkit-focus-ring-color auto 0px;
  }
`

export const Button = styled.div`
  color: #FFF;
  background-color: #AAA;
  font-size: 2rem;
  text-align: center;
  padding: .25rem 1.5rem;
  border-radius: 6.28px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #AAA;
    background-color: #FFF;
  }

  &:active {
    color: #CCC;
    background-color: #333;
  } 

`

export const Todo = styled.div`
  width: 60%;
  font-size: 2rem;
  box-sizing: border-box;
  padding: .5rem 1.5rem;
  border-radius: 6.28px;
  background-color: #FFF;
  margin: .5rem 0;
  cursor: pointer;
  border: 1px solid #FFF;

  &:hover {
    box-sizing: border-box;
    border: 1px solid #888;
  }
`