import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

import PerfumeStore from "./features";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1280,
        xl: 1920
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PerfumeStore />
    </ThemeProvider>
  );
}

export default App;
