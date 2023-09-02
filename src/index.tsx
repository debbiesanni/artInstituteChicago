import React from "react";
import ReactDOM from "react-dom/client";
import "Styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, useLocation} from "react-router-dom";
import {store} from "Redux/Store";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import theme from "Styles/theme";
import {useLayoutEffect} from "react";

const Wrapper = ({children}: {children: JSX.Element}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Wrapper>
            <App />
          </Wrapper>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
