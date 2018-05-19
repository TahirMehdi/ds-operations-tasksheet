import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./configureStore";
import Root from "./Root";
import { loadUserData } from "./helpers/localStorage";

const userData = loadUserData();
const store = configureStore({
  user: userData ? { ...userData, authorised: true } : undefined
});

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
