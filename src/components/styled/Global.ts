import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

    body {
        font-family: 'Source Sans Pro', sans-serif;
        background: ${({theme}) => theme.colors.body};
    }
`