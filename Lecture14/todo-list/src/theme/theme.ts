import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {
  
}

// Palette from https://coolors.co
// Generated in https://m2.material.io/resources/color/#!/?view.left=0&view.right=0

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#ffd6ff',
          light: '#ffffff',
          dark: '#cca4cc',
          contrastText: '#000000'
        },
        secondary: {
          main: '#b8c0ff',
          light: '#ebf3ff',
          dark: '#8790cc',
          contrastText: '#000000'
        },
        text: {
          primary: '#212121',
          secondary: '#37474f',
          disabled: '#757575'
        },
        action: {
          active: '#907a9e',
          hover: '#dcc1ef',
          selected: '#aa91bc', 
          disabled: '#9585a1', 
          disabledBackground: '#675872'
        },
        background: {
          paper: '#c8b6ff',
          default: '#fce8ff'
        }
      }
      : {
          // palette values for dark mode
          primary: {
            main: '#99d98c',
            light: '#cbffbd',
            dark: '#69a75e',
            contrastText: '#ffffff'
          },
          secondary: {
            main: '#1a759f',
            light: '#59a4d0',
            dark: '#004a70',
            contrastText: '#ffffff'
          },
          text: {
            primary: '#ffffff',
            secondary: '#efebe9',
            disabled: '#bdbdbd'
          },
          action: {
            active: '#76c893',
            hover: '#a8fbc4',
            selected: '#96dfae', 
            disabled: '#0a361f', 
            disabledBackground: '#679677'
          },
          background: {
            paper: '#15866c',
            default: '#52b69a'
          }
        }),
  },
});


export const getTheme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));
