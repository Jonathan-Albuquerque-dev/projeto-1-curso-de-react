import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div>
        <Link className="Logo" to="/">
          Full Filmes
        </Link>
      </div>
      <div className="container-menu">
        <Link className="menu" to="/favoritos">
          Favoritos
        </Link>
        <Link className="menu" to="/categorias">
          Categoria
        </Link>
      </div>
    </header>
  );
}
