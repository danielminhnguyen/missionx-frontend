import { createMuiTheme } from "@material-ui/core";
import { theme } from "./default";

const overrides = {
  MuiButton: {
    containedSecondary: {
      backgroundColor: "red",
      color: "white",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontWeight: "400",
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
  },
};

export const defaultTheme = createMuiTheme({ ...theme, ...overrides });
