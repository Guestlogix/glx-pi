// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from "styled-theme/composer"

interface ITheme {
  palette: object
  reversePalette: any
  fonts: object
  sizes: object
}

const theme: ITheme = {
  palette: {},
  reversePalette: {},
  fonts: {},
  sizes: {},
}

theme.palette = {
  primary: ["#F7901E"], // glx orange
  secondary: ["#00a3d9"], // glx blue
  danger: ["#C65251"],
  alert: ["#EB9F00"],
  success: ["#519D33"],
  white: ["#ffffff"],
  background: ["rgb(30, 36, 48)"],
  grayscale: ["#081B33", "#152642", "#2F4562", "#506680", "#767D92", "#353C51"],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: "sans-serif",
  pre: "Consolas, Liberation Mono, Menlo, Courier, monospace",
  quote: "Georgia, serif",
}

theme.sizes = {
  maxWidth: "1100px",
}

export default theme
