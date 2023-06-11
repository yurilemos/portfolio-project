import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    font-family: 'Georama', 'Inter', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #0A0A09;
    color: #FFFFFF;    
  }


  button {
    cursor: pointer;
  }

  #root, #main {
    height: 100%;
    padding: 1.5rem 3rem;
  }

  :root {  
    --white-color: #FFFFFF;
    --background-color: #0A0A09;
    --purple-color: #836BDE;
    --primary-blue-color: #2a27ff;
  }
  


`;
