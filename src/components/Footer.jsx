import React from "react";
import logo from "./logo.png";
 
const Footer = () => {
  return (
    <footer className="pie-pagina bg-gray-800">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="box">
            <figure className="flex justify-center">
              <a href="#">
                <img src={logo} alt="Logo" className="w-64" />
              </a>
            </figure>
          </div>
          <div className="box text-white">
            <h2 className="text-xl font-bold mb-4">CONTACTANOS</h2>
            <p>Para cualquier duda o información no dudes en contactarnos:</p>
            <p>
              Correo electrónico:{" "}
              <a href="mailto:contacto@unid.mx" className="text-blue-500">
                contacto@unid.mx
              </a>
            </p>
            <p>
              Teléfono:{" "}
              <a href="tel:+52 744 484 5200" className="text-blue-500">
                +52 744 484 5200
              </a>
            </p>
          </div>
          <div className="box text-white">
            <h2 className="text-xl font-bold mb-4">SIGUENOS</h2>
            <div className="red-social">
              <a
                href="https://www.facebook.com/RedUNID/"
                className="fa fa-facebook"
              ></a>
              <a
                href="https://www.instagram.com/RedUNID/"
                className="fa fa-instagram"
              ></a>
              <a
                href="https://www.linkedin.com/school/redunid/"
                className="fa fa-linkedin"
              ></a>
              <a
                href="https://www.youtube.com/user/RedUNID"
                className="fa fa-youtube"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className="grupo-2 bg-gray-900 text-white py-4">
        <small>
          &copy; 2024 <b>UNID</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};
 
export default Footer;