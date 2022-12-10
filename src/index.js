import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <AuthProvider store={store}> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
