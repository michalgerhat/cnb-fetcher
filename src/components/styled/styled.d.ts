import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            body: string,
            main: string,
            hover: string,
        }
    }
}