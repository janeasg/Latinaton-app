import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  function verificarLogin() {
  if (email === "" || senha === "") {
    alert("Preencha o e-mail e a senha.");
    return;
  }

  alert("Login realizado com sucesso!");
  navigate("/painel");
}

  return (
    <div>
      <h2>Login</h2>

      <input type="email" placeholder="Email" 
  value={email}
  onChange={(evento) => setEmail(evento.target.value)}
/>
      <input type="password" placeholder="Senha"
      value={senha}
      onChange={(evento) => setSenha(evento.target.value)}
      />

     <button onClick={verificarLogin}>Entrar</button> 
      
<p>Email digitado: {email}</p>
      <p>
        Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login;