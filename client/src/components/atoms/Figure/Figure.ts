import styled from "styled-components"
import { palette } from "styled-theme"

interface IProps {
  size: "large" | "medium" | "small"
  color?: string
}

const sizes = { large: "80px", medium: "60px", small: "30px" }

export const Figure = styled.span`
  font-size: ${(props: IProps) =>
    props.size ? sizes[`${props.size}`] : sizes.large};
  color: ${(props: IProps) =>
    props.color ? props.color : palette("grayscale", 2)};
`
