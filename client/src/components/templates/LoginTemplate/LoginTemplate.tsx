import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
  padding-top: 10rem;
  margin: 0 auto;
  width: 320px;
`

const Container = styled.div``

interface IProps {
  children: JSX.Element
}

export const LoginTemplate: React.SFC<IProps> = props => {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  )
}
