import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/404";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* <Route element={<PrivateRoute />}>
          <Route path="/sendCV" element={<ApplyCv />} />
        </Route> */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App
