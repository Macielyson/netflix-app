import React from "react";
import Login from "./src/pages/Login";
import { ThemeProvider, DefaultTheme } from "react-native-paper";

const App = () => {
  // em vez de 
  const thema = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#C00808',
    }
  }

  return (
    // em vez de PeparProvide é ThemeProvider
    <ThemeProvider theme={thema}>
      <Login />
    </ThemeProvider>
  );
}

export default App;