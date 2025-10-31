import { Link } from "react-router-dom";
import "../css/Catalogo.css";

export default function NotFound() {
  return (
    <main className="notfound">
      <h2>404 - Página não encontrada </h2>
      <Link to="/">Voltar para Home</Link>
    </main>
  );
}
