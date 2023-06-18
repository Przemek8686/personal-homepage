import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    html {
        box-sizing: border-box;
    }

        *, ::after, ::before {
            box-sizing: inherit;
    }
    
    body {
        background-color: ${({ theme }) => theme.colors.site.background};
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        word-break: break-word;
        letter-spacing: 0.05em;
        color: ${({ theme }) => theme.colors.site.text};
        transition: 1s;
    }
`;