import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,*::after, *::before {
    box-sizing:border-box;
    --primary: #65b5ff;
    --background: #F6F6F6;
}
body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
}
`;
