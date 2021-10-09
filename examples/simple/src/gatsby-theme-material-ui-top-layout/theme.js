import { createTheme, colors } from '@mui/material';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: `#556cd6`,
    },
    secondary: {
      main: `#19857b`,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: `#fff`,
    },
  },
});

export default theme;
