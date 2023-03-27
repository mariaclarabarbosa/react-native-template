import {createTheme} from '@shopify/restyle';

const palette = {
  colors: {
    white: '#FFFFFF',
    muted: {
      400: '#BFBFBF',
      700: '#404040',
    },
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
};

const THEME = createTheme({
  colors: {
    background: palette.colors.white,
    darkText: palette.colors.muted[700],
    lightText: palette.colors.muted[400],
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      fontSize: palette.fontSizes.sm,
    },
    title: {
      fontSize: palette.fontSizes.md,
      fontWeight: 'bold',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof THEME;
export default THEME;
