import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Product from "./Component/Product";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </Provider>

  );
};

export default App;
