import React from "react";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Filme from "./src/pages/Filme";
import { ThemeProvider, DefaultTheme } from "react-native-paper";
import { StatusBar } from "react-native";

// DefaultTheme: ele muda apenas a cor primary de azul para vermelho
// e passa ela como tema principal
const App = () => {
  // em vez de 
  const thema = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#C00808',
      background: '3c3c3c',
      placeholder: '#ffffff',
      text: '#ffffff',
    },
  }

  {/*StatusBar -> barra de status ou notificaçoes*/ }
  return (
    // em vez de PeparProvide é ThemeProvider
    <ThemeProvider theme={thema}>
      <StatusBar backgroundColor="#000" />
      <Filme />
    </ThemeProvider>
  );
}

export default App;