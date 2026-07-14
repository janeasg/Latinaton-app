import React from "react";
import CardDeTarefa from "../Components/CardDeTarefas";

function Painel() {
  return (
    <div className="painel">
      <header>
        <h2>Painel</h2>
      </header>

      <main>
        <CardDeTarefa
          title="Criar Validação do Formulário"
          description="Integrar os campos de login e cadastro com o backend."
          assigneeName="Desenvolvedor"
          dueDate="Hoje às 22:00h"
          priority="high"
          status="in_progress"
          showIcon={true}
          hasDivider={true}
          onStatusChange={() => alert("Status alterado!")}
        >
          <small>Tag: Front-end / React</small>
        </CardDeTarefa>
      </main>
    </div>
  );
}

export default Painel;