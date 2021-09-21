import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
// import { setCartData } from "./Storage/localStorage";
const store = createStore(reducer);

// store.subscribe(() => setCartData(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
