import * as React from "react"
import styled from "styled-components"

interface IProps {
  x: number
  y: number
  colspan: number
  rowspan: number
  title: string
}

interface ICellProps {
  x: number
  y: number
  colspan: number
  rowspan: number
}

const Cell = styled.article`
  grid-column: ${(props: ICellProps) => props.x + 2} /
    ${(props: ICellProps) => props.x + 2 + props.colspan};
  grid-row: ${(props: ICellProps) => props.y + 2} /
    ${(props: ICellProps) => props.y + 2 + props.rowspan};
`

const Title = styled.span`
  font-size: 20px;
  color: #fff;
`

export const DashboardCell: React.StatelessComponent<IProps> = props => {
  return (
    <Cell {...props}>
      <Title>{props.title}</Title>
      {props.children}
    </Cell>
  )
}
