import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#D80D44",
      main: "#B50938",
      dark: "#840629",
      contrastText: "#fff",
    },
  },
  typography: {
    h3: {
      color: "#333333",
      lineHeight: "66px",
      fontSize: "60px",
      "@media (max-width:900px)": {
        lineHeight: "65px",
        fontSize: "60px",
      },
      "@media (max-width:600px)": {
        lineHeight: "30px",
        fontSize: "25px",
        fontWeight: 600,
      },
    },
    h5: {
      color: "#333333",
      fontWeight: 600,
      lineHeight: "25px",
      fontSize: 20,
      "@media (min-width:600px)": {
        fontWeight: 600,
        lineHeight: "45px",
        fontSize: 36,
      },
    },
    h6: {
      fontWeight: 600,
      lineHeight: "25px",
      height: 43,
      fontSize: 18,
    },
    body1: {
      fontWeight: 400,
      color: "#333333",
      lineHeight: "30px",
      fontSize: "18px",
      "@media (max-width:700px)": {
        fontSize: "14px",
        lineHeight: "25px",
      },
    },
  },
});

export default theme;
