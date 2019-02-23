import * as React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./themes/default"
import { palette } from "styled-theme"
import { AppConsole } from "./ecosystems"
import { Header } from "./organisms"

const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }

  body {
    margin: 0;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    background-color: ${palette("white", 1)};
  }
`

const Container = styled.div`
  display: flex;
  border-color: green;
  height: calc(100vh - 50px);
`

export class App extends React.Component<{}> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Header />
          <Container>
            <AppConsole />
          </Container>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
