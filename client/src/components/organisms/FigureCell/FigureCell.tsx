import * as React from "react"
import { Figure } from "../../atoms"
import styled from "styled-components"
import { palette } from "styled-theme"

interface IProps {
  value: string
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Subtitle = styled.div`
  text-align: center;
  font-size: 25px;
  color: ${palette("grayscale", 2)()};
`

export const FigureCell: React.StatelessComponent<IProps> = props => {
  return (
    <Container>
      <div>
        <div>
          <Figure size={"large"}>{props.value}</Figure>
        </div>
        <Subtitle>Subtitle</Subtitle>
      </div>
    </Container>
  )
}
