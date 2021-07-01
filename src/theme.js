import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#221f1f";
const red = "#E50914";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: red,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: red,
    },
  },
});
