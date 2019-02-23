import * as React from "react"
import styled from "styled-components"
import { palette } from "styled-theme"

interface IState {
  firstname?: string
}

const Chat = styled.div`
  flex: 1;
`

const Tools = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow: hidden;
  border-left: 1px solid ${palette("grayscale", 3)};
`
const PanelTwo = styled.div`
  flex: 1;
`

export class AppConsole extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      firstname: "hank",
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Chat>Chat</Chat>
        <Tools>
          <PanelTwo>reccommended</PanelTwo>
          <PanelTwo>reccommended</PanelTwo>
          <PanelTwo>reccommended</PanelTwo>
        </Tools>
      </React.Fragment>
    )
  }
}
