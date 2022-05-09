import React from "react";
import ReactDOM from "react-dom/client";
//redux imports
import { Provider } from "react-redux";
import storeRedux from "./store/indexReducer";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeRedux}>
    <App />
  </Provider>
);
