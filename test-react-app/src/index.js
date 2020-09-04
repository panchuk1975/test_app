import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";

import App from "./App.js";

let rerenderEntireTree = (state) => {
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
