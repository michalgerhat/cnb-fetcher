import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyles } from './components/styled/Global';
import { Container } from './components/styled/Container.styled';
import { DataContextConsumer, DataContextProvider } from './components/styled/DataContext';

const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
                <DataContextProvider>
                    <GlobalStyles />
                    <Container>
                        <DataContextConsumer>
                            {({plainTextData}) => (
                                <p>{plainTextData}</p>
                            )}
                        </DataContextConsumer>
                    </Container>
                </DataContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
