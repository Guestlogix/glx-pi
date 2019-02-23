import * as React from "react"
import styled, { keyframes } from "styled-components"
import { palette } from "styled-theme"

interface IToast {
  message: string
}

interface IState {
  show: boolean
}

interface IMessageBox {
  show: boolean
}

const fadeIn = keyframes`
  from{transform : translateY( -10rem)}
  to{transform: translateY(0)}
`

const fadeOut = keyframes`
  from{transform : translateY( 0rem); display:block}
  to{transform: translateY(-10rem); display: none}
`

const MessageBox = styled.div`
  display: ${(props: IMessageBox) => (props.show ? `block` : `none`)};
  position: absolute;
  cursor: pointer;
  padding: 1rem;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  background-color: ${palette("danger", 0)};
  color: #fff;
  box-sizing: border-box;
  box-shadow: none;

  animation: ${fadeIn} 0.4s ease-in, ${fadeOut} 0.4s ease-out 6s forwards;
`
export class Toast extends React.Component<IToast, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
      show: false,
    }
  }

  public componentDidMount = () => {
    if (this.props.message) {
      this.setState({ show: !this.state.show })
    }
  }

  public closeNotification = () => {
    this.setState({ show: false })
  }

  public render() {
    return (
      <React.Fragment>
        <MessageBox show={this.state.show} onClick={this.closeNotification}>
          {this.props.message}
        </MessageBox>
      </React.Fragment>
    )
  }
}
