import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
} 
html, 
body {  
        background: #F3F5FB;
        color: #333;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 16px;
        height:100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
   
    #root {
        height: 100%;
        position: relative;
    }

    li {
        list-style: none;
    }
    button {
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    p {
        line-height: 1.4em;
    }

    img {
        max-width: 100%;
    }

`;
