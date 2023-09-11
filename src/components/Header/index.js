import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <Link className="Logo" to="/">
        Full Filmes
      </Link>
      <Link className="favoritos" to="/favoristo">
        Favoritos
      </Link>
    </header>
  );
}
