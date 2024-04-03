import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Typer() {
  const [text] = useTypewriter({
    words: ["UNID-GPT", "Tareas con IA"],
    loop: {},
    typeSpeed: 160,
  });

  const h1Style = {
    fontSize: "4rem", // Tamaño de fuente por defecto
    fontFamily: "Arial, sans-serif", // Cambio de tipo de letra
  };

  const h1MobileStyle = {
    fontSize: "2rem", // Tamaño de fuente más pequeño para dispositivos móviles
    fontFamily: "Arial, sans-serif", // Igual tipo de letra para dispositivos móviles
  };

  return (
    <div>
      <h1 style={h1Style} className="hidden md:block">
        {text}
        <span>
          <Cursor cursorColor="white" />
        </span>
      </h1>
      <h1 style={h1MobileStyle} className="block md:hidden">
        {text}
        <span>
          <Cursor cursorColor="white" />
        </span>
      </h1>
    </div>
  );
}

export default Typer;
