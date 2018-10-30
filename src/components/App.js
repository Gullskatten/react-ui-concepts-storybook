import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import defaultTheme from '../utils/theme.default';

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    to top,
    ${props => props.theme.tertiary} 0%,
    ${props => props.theme.quinary} 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <AppContainer/>
      </ThemeProvider>
    );
  }
}

export default App;
