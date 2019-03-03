import * as React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./themes/default"
import { palette } from "styled-theme"
import { ProjectManagementDashboard } from "./ecosystems"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: ${palette("grayscale", 0)};
  }
`

export class App extends React.Component<{}> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <ProjectManagementDashboard />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
