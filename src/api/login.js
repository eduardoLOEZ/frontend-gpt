import axios from "axios";

const endPoint = "https://backend-gpt-unid.onrender.com/login";

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(endPoint, {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    if (response.status === 201) {
      // Redireccionar al dashboard
      window.location.href = "/dashboard";
    }
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getToken = () => {
  return localStorage.getItem("token");
};

export const decodeToken = (token) => {
  try {
    // Decodifica el token JWT y devuelve el objeto decodificado
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    // Manejo de errores si hay un problema al decodificar el token
    console.error("Error al decodificar el token:", error);
  }
};

export const getUserIdFromToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = decodeToken(token);
    // Verifica si el token tiene un campo 'user' y si contiene un '_id'
    if (decodedToken.user && decodedToken.user._id) {
      return decodedToken.user._id;
    } else {
      // Manejo de error si el token no tiene el formato esperado
      console.error("El token no contiene el campo 'user' o '_id'");
      return null;
    }
  } else {
    // Manejo de error si no se encuentra el token en el almacenamiento local
    console.error("No se encontró ningún token en el almacenamiento local");
    return null;
  }
};

export { loginUser, getToken };
