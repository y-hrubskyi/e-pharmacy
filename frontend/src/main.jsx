import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import { store, persistor } from "@/store/store.js";
import { theme } from "@/styles/theme.js";
import { GlobalStyle } from "@/styles/GlobalStyle.js";
import { Toaster } from "@/components/Toaster/Toaster.jsx";
import { App } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/e-pharmacy">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Toaster />
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
