/* eslint-disable max-len */
import { PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const ThemeColors = {
  black: '#1D1D1F', // 0
  grayDark: '#81818C',
  gray: '#505050', // 3
  grayLight: '#DFDFEB', // 9
  gray500: '#8A8A8A',
  white: '#FFFFFF',
  red: '#CA4740', // 1
  redLight: '#FF4848',
  crimson: '#DC004E', //малиновый
  orange: '#FF9500', // 8
  green: '#52A06E', // 2
  greenLight: '#00D108',
  blue: '#0094FF', // 5
  blueLight: '#00E0FF', // 4
  purple: '#B265FF', // 6
  purpleLight: '#DB00FF', // 7
  body: '#FBFBFD',
  yellow: '#F3BA2F',
  blueDark: '#005560',
  magenta: '#FF37F7',
  violet: '#9B37FF',
};

export const ThemePaddings = {
  page: '102px 16px 39px',
};

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h2grade: true;
  }
}

declare module '@mui/material/Fab' {
  interface FabPropsVariantOverrides {
    contrast: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  h2grade: React.CSSProperties;
}

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode,

    },

    components: {
      MuiCssBaseline: {
        styleOverrides: `
        body {
          background-color: ${mode === 'dark' ? ThemeColors.black : ThemeColors.white}
        }
        `,
      },
    },
    typography: {
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    } as ExtendedTypographyOptions,
  } as ThemeOptions);
};
