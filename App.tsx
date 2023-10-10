import React from "react";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import { ThemeProvider, DefaultTheme } from "react-native-paper";
import { StatusBar } from "react-native";

const App = () => {
  // em vez de 
  const thema = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#C00808',
    }
  }

  {/*StatusBar -> barra de statud*/ }
  return (
    // em vez de PeparProvide é ThemeProvider
    <ThemeProvider theme={thema}>
      <StatusBar backgroundColor="#000" />
      <Home />
    </ThemeProvider>
  );
}

export default App;