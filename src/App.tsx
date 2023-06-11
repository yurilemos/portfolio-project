import React from "react";
import "./App.css";
import { Router } from "./router/Router";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
