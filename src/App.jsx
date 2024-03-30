import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";
import GptDashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import "./App.css";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<GptDashboard />} />
        </Route>
 
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;