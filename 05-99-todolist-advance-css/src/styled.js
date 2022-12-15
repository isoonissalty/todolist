import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`

export const Content = styled.div`
  height: 60%;
  width: 60%;
  padding: 5%;
  background-color: #fff;
  border-radius: 3.14rem;
`

export const Section = styled.div`
  display: flex;
  ${props => props.column && `flex-direction: column;`}
  ${props => props.spaceBetween && `justify-content: space-between;`}
  ${props => props.height && `height: ${props.height};`}
  flex-wrap: wrap;
  overflow: auto;
`