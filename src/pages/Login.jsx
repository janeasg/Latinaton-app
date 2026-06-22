import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="form">
      <h2>Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Senha" />

      <Link to="/painel">
        <button>Entrar</button>
      </Link>
    </div>
  );
}

export default Login;