import { useState } from "react";

function Hackathons() {

  const [mensagem, setMensagem] = useState(
    "Nenhum hackathon selecionado"
  );

  return (
    <div>

      <h1>Hackathons</h1>

      <p>{mensagem}</p>

      <button
        onClick={() =>
          setMensagem("Hackathon IFMG selecionado")
        }
      >
        Selecionar
      </button>

    </div>
  );
}

export default Hackathons;