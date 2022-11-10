import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// FROZEN - need to complete tutorial by replacing the recommended
// `react-moralis` logic; See `README.md` for frozen info. (topher)
// import { MoralisProvider } from "react-moralis";
//
// const moralisAppId = process.env.MORALIS_APP_ID;
// const moralisServerUrl = process.env.MORALIS_SERVER_URL;
const theme = extendTheme({ config: { initialColorMode: "light" } });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
