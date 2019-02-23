import styled from "styled-components"
import * as React from "react"

interface IProps {
  gap: number
  align: string
  span: number
  width: number
  children: JSX.Element
}

const px = (n: number) => (typeof n === "number" ? n + "px" : n)

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props: IProps) => px(props.width)}, 1fr)
  );
  grid-gap: ${props => px(props.gap)};
  align-items: ${props => props.align};
  grid-column: span ${props => props.span};
`

export const Template: React.StatelessComponent<IProps> = props => {
  return (
    <Grid
      width={props.width}
      align={props.align}
      span={props.span}
      gap={props.gap}
    >
      {props.children}
    </Grid>
  )
}
