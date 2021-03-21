import { createMuiTheme } from "@material-ui/core/styles";

// Pick colors on https://material.io/resources/color/#!/

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#585858",
      secondary: "#AEAEAE",
    },
    primary: {
      light: "#F2FFFC",
      main: "#55AE99",
      dark: "#3D7B6C",
      contrastText: "#000",
    },
    secondary: {
      light: "#ffff81",
      main: "#E654A3",
      dark: "#c8a415",
      contrastText: "#000",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      line: "#cecece",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
  },
});
