import React, { useEffect, useState } from "react";
import { loginUser } from "../api/login";
import { Navigate } from "react-router-dom";
import backgroundImage from "./unid9.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Estado para controlar la carga

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      email: email,
      password: password,
    };

    try {
      const response = await loginUser(credentials.email, credentials.password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-cover bg-center fixed inset-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container flex justify-center items-center h-screen">
        <div className="login-form bg-white bg-opacity-80 p-8 text-lg rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8">UNID IA</h2>
          <div className="sub-title text-base mb-4">
            De estudiantes para estudiantes
          </div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-80 p-3 mb-6 border border-black rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-80 p-3 mb-6 border border-black rounded-md"
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-40 p-3 bg-black text-white rounded-md cursor-pointer"
          >
            Login
          </button>

          <div className="sub-text text-base mt-8">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="cta-button">
              Regístrate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
