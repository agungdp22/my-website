import deepOrange from "@material-ui/core/colors/deepOrange";
import indigo from "@material-ui/core/colors/indigo";
import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: deepOrange,
  },
  typography: {
    fontFamily: [
      "Roboto Mono, Roboto, Monospace",
    ].join(","),
  },
});

export default theme;
