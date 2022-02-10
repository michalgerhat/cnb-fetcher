import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyles } from './components/styled/Global';
import { Container } from './components/styled/Container.styled';

const theme: DefaultTheme = {
    colors: {
        body: "#ffffff",
        main: "#962255",
        hover: "#a64275"
    }
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Container>
                Hello world!
            </Container>
        </ThemeProvider>
    );
}

export default App;
