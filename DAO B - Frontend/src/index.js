import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { AxiosClient } from "./axiosClient";
import { BrowserRouter } from "react-router-dom";
import { reducers } from "./store/reducers";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { createStore,applyMiddleware } from "redux";
import { compose } from "redux";

const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <AxiosClient>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </AxiosClient>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
