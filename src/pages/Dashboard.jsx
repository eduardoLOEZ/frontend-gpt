import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../api/login';
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDF from '../components/PDF';
import { getUserIdFromToken } from '../api/login';


const GptDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prompt, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [responseHistory, setResponseHistory] = useState([]);
  const [expandedHistory, setExpandedHistory] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Jesus Eduardo Loeza Cebrero",
    id: "00703919",
    subject: "Programación 1",
    career: "Ing en Software",
    semester: "5to",
    imageUrl: 'https://res.cloudinary.com/dyhpbqaht/image/upload/v1710900489/descarga_vwdrng.png'
});

  useEffect(() => {
    // Verificar si el usuario está autenticado al cargar el componente
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
      // Obtener el ID del usuario del token
      const userId = getUserIdFromToken();
      // Cargar historial de respuestas usando el ID del usuario
      loadResponseHistory(userId);
    }
  }, []);




  const loadResponseHistory = async (userId) => {
    try {
      const token = getToken();
    //   const userId = "65fa2357904175d58eaf7bf0"; // Reemplaza esto con la lógica para obtener el ID de usuario
      const response = await axios.get(`http://localhost:3000/gpt/responses/${userId}`, {
        headers: {
          "token": token // Enviar el token de autenticación en el encabezado
        }
      });
      setResponseHistory(response.data.responses);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };    

  

  const handleSendRequest = async () => {
    try {
      const token = getToken();
      const response = await axios.post('http://localhost:3000/gpt/request/65fa2357904175d58eaf7bf0', {
        prompt: prompt,
      }, {
        headers: {
          "token": token // Enviar el token de autenticación en el encabezado
        }
      });
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  const toggleExpandedHistory = () => {
    setExpandedHistory(!expandedHistory);
  };

  const handleExportToPDF = (selectedResponse) => {
    // Exportar la respuesta seleccionada como PDF
    const pdfDocument = (
      <PDF userInfo={userInfo} responseHistory={[selectedResponse]} />
    );
    return (
      <PDFDownloadLink document={pdfDocument} fileName={`${userInfo.name}_response.pdf`}>
        {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
      </PDFDownloadLink>
    );
  };



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ChatGPT Clone</h1>
      {/* Input para enviar mensaje */}
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Escribe tu mensaje..."
          value={prompt}
          onChange={handleInputChange}
        />
      </div>
      {/* Botones */}
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleSendRequest}
        >
          Enviar
        </button>
        {isLoggedIn ? (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : null}
      </div>
      {/* Respuesta del modelo */}
      {response && (
        <div className="border p-4 rounded">
          <strong>Respuesta:</strong> {typeof response.data === 'string' ? response.data : JSON.stringify(response.data)}
        </div>
      )}
      {/* Botón para ver historial */}
      <div className="mb-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={toggleExpandedHistory}
        >
          {expandedHistory ? 'Ocultar historial' : 'Ver historial'}
        </button>
      </div>

      {/* Historial de respuestas (expandido o contraído según el estado) */}
    {expandedHistory && (
    <div>
        <h2 className="text-xl font-bold mb-2">Historial de respuestas</h2>
        {responseHistory.map((item, index) => (
        <div key={index} className="bg-white border rounded p-4 mb-4">
            <strong className="response-text">Tarea {index + 1}:</strong> 
            <span className="response-text">{item}</span> {/* Clase para el texto de la respuesta */}
            <div className="response-text">
            {/* Botón para exportar esta respuesta a PDF */}
            {handleExportToPDF(item)}
            </div>
        </div>
        ))}
    </div>
)}

  
      
    </div>
  );
};

export default GptDashboard;
