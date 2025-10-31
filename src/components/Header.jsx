import { Link } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>CineAction</h1>
      <nav>
        <Link to="/" class="botao_link">Home</Link>
        <Link to="/filmes" class="botao_link">Filmes</Link>
        <Link to="/series" class="botao_link">Séries</Link>
        <Link to="/animes" class="botao_link">Animes</Link>
      </nav>
    </header>
  );
}
