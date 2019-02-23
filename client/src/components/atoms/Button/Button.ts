import styled from "styled-components"
import { palette } from "styled-theme"

interface IProps {
  color?: string
}

export const Button = styled.button`
  &.ripple {
    background-position: center;
    transition: background 0.8s;
  }

  &.ripple:focus {
    outline: none;
  }

  &.ripple:active {
    background-color: ${palette("grayscale", 4)};
    background-size: 100%;
    transition: background 0s;
  }

  background: ${(props: IProps) =>
    props.color ? props.color : palette("white", 0)};
  opacity: 1;
  border-radius: 7px;
  padding: 0.5rem 3rem;
  font-weight: bold;
  font-size: 17px;
  margin: 0 5rem;
`
