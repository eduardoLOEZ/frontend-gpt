import { useTypewriter, Cursor } from "react-simple-typewriter";

function Typer() {
  const [text] = useTypewriter({
    words: ["UNID-GPT", "Tareas con IA"],
    loop: {},
    typeSpeed: 160,
  });

  const h1Style = {
    fontSize: "4rem", // Tamaño de fuente más pequeño
    fontFamily: "Arial, sans-serif", // Cambio de tipo de letra
  };

  return (
    <div>
      <h1 style={h1Style}>
        {text}
        <span>
          <Cursor cursorColor="white" />
        </span>
      </h1>
    </div>
  );
}

export default Typer;
