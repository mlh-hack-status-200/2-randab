import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

//Styles Main
import theme from "./utils/theme";
import GlobalStyles from "./utils/Global";

//Components
import App from "./App";

render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
