import React from "react";
import { Link } from "react-router-dom";
 
const AboutUs = () => {
  return (
    <div className="bg-gray-200 font-sans min-h-screen">
      <div className="container mx-auto max-w-xl mt-10 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Bienvenidos a UNID IA
        </h1>
        <h2 className="text-xl font-semibold mb-4">¿Quiénes somos?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Esta es una plataforma creada por un grupo apasionado de estudiantes
          para estudiantes. Somos de la universidad UNID y nos esforzamos por
          simplificar el proceso de realizar tareas escolares mediante el poder
          de la inteligencia artificial (IA).
        </p>
        <h2 className="text-xl font-semibold mb-4">¿Qué ofrecemos?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nuestra misión es proporcionar a los estudiantes herramientas
          innovadoras que les permitan realizar sus tareas de manera más
          eficiente y efectiva. Con nuestra aplicación, puedes generar y
          modificar tareas utilizando tecnología de IA, asegurándote de obtener
          resultados precisos y de alta calidad. Lo que nos distingue es nuestra
          capacidad para convertir tus tareas en archivos PDF profesionales con
          solo unos pocos clics. Ya no tendrás que preocuparte por el formato o
          la presentación; nosotros nos encargamos de ello para que puedas
          centrarte en lo más importante: aprender y crecer.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <span className="highlight">¡Únete a nosotros al futuro</span>{" "}
          <Link
            to="/register"
            className="cta-button inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
};
 
export default AboutUs;