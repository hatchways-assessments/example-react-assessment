import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "./components/GlobalStyles";
import { Game } from "./components/Game";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Game />
      </ThemeProvider>
    </>
  );
}

export default App;
