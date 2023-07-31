import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    overflow: hidden;
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Georama', 'Inter', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #000000;
    background: -webkit-linear-gradient(to right, #000000, #434343);
    background: linear-gradient(to right, #000000, #434343);
    color: #FFFFFF;  
    height: 100%;
    overflow: auto;
  }


  button {
    cursor: pointer;
  }

  #root, #main {
    height: 100%;
    padding: 3rem 10rem;
  }

  :root {  
    --white-color: #FFFFFF;
    --background-color: #0A0A09;
    --purple-color: #836BDE;
    --primary-blue-color: #2a27ff;
  }

  @media (max-width: 945px) {
    #root, #main {    
      padding: 3rem 6rem;
    }
  }

  @media (max-width: 595px) {
    #root, #main {    
      padding: 3rem 3rem;
    }
  }
  


`;
