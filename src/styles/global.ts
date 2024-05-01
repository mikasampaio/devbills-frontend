import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        box-sizing: border-box;
        outline: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${theme.colors.black};
    }

    body, input, button, select {
        font: 1rem 'Lexend', sans-serif;
    }

    h1, h2, p, span, strong, button, label, input {
        line-height: 100%;
    }

    #root {
        max-width: 1280px;
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }
`;
