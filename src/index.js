import React from "react";
import ReactDOM from "react-dom";
import Theme from "./themes/Theme";
import GlobalStyle from "./themes/globalStyles";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Theme />
    </Provider>
  </React.StrictMode>,

  document.querySelector("#root")
);
