import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react";
import LoginForm from "./pages/Login"
import RegisterForm from "./pages/Register"
import GptDashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };


  

  return (
    <BrowserRouter>
    <div className={`${darkMode ? "dark" : ""}`}>
      <Routes>

      <Route element={<PrivateRoute/>}>

        <Route path="/dashboard" element={<GptDashboard/>} />

      </Route>

        
        

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

      </Routes>
      <button
          className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

    </div>
    
    </BrowserRouter>
  )
}

export default App