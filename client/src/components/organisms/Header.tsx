import * as React from "react"
import styled from "styled-components"
import { palette } from "styled-theme"

interface IState {
  firstname?: string
}

const StyledHeader = styled.div`
  height: 50px;
  border-bottom: 1px solid ${palette("grayscale", 3)};
`

export class Header extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      firstname: "hank",
    }
  }

  public render() {
    return <StyledHeader />
  }
}
