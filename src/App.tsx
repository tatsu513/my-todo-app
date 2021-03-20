import React from "react";
import Router from "./Router";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./assets/Theme";

const App: React.FC = () => {
  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Router />
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
};

export default App;
