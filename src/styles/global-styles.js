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
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
   
    #root {
        min-height: calc(100vh - 72px);
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

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
}
`;
