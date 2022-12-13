// Arquivo para sobreescrever um tipo do styled components
import 'styled-components';
import theme from './theme';



declare module 'styled-components' {
    type ThemeType = typeof theme // copiou os tipos de theme para dentro do Themetype com typeof

    export interface DefaultTheme extends ThemeType {} // default theme extende nosso tema
}