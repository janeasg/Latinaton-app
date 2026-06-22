function Cadastro() {
  return (
    <div className="form">
      <h2>Criar Conta</h2>

      <input placeholder="Nome" />
      <input placeholder="Email" />
      <input placeholder="Usuário" />
      <input type="password" placeholder="Senha" />

      <button>Criar Conta</button>
    </div>
  );
}

export default Cadastro;