import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { rem } from 'polished';
import themeProps from '../types/ThemeProps';

const theme = {
    // font-sizes
    sizes: {
        h1: rem('33px'),
        h2: rem('28px'),
        h3e: rem('23px'),
        h4: rem('19px'),
        txt: rem('16px'),
    },

    // colors
    colors: {
        white: '#eeeeee',
        black: '#252525',
        grey: '#696969',
        primaryBtn: '#6739d4',
        secondaryBtn: '#003366',
    },
};

const Theme: FC<themeProps> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
