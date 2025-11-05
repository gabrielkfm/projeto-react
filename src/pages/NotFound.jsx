import { Link } from "react-router-dom";
import "../css/Catalogo.css";
import Header from "../components/Header";


export default function NotFound() {
  return (
    <main className="notfound">
      <Header />
      <h2>404 - Página não encontrada </h2>
      <Link to="/">Voltar para Home</Link>
    </main>
  );
}
