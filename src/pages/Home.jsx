import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <header>
        <button>Menu</button>

        <Link to="/login">
          <button>Iniciar Sessão</button>
        </Link>
      </header>

      <main>
        <h1>Hackathon</h1>

        <p>Bem-vindo à plataforma.</p>

        <Link to="/hackathons">
          <button>Ver Hackathons</button>
        </Link>
      </main>

      <footer>
        <button>Contato</button>
      </footer>
    </div>
  );
}

export default Home;