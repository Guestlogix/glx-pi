import * as React from "react"
import styled from "styled-components"

interface IProps {
  title: string
  rows: number
  columns: number
}

interface IGridProps {
  rows: number
  columns: number
}

const Grid = styled.div`
  display: grid;
  grid-template-rows:
    10px repeat(${(props: IGridProps) => props.rows}, minmax(200px, 1fr))
    10px;
  grid-template-columns:
    10px repeat(${(props: IGridProps) => props.columns}, minmax(200px, 1fr))
    10px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  align-items: stretch;
  height: 100vh;
  max-height: 100vh;
`

export const Dashboard: React.StatelessComponent<IProps> = props => {
  return (
    <Grid rows={props.rows} columns={props.columns}>
      {props.children}
    </Grid>
  )
}
