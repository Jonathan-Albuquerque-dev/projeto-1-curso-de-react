import { useState, useEffect } from "react";
import "./style.css";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const filmesFavoritos = localStorage.getItem("@favoritos");
    setFilmes(JSON.parse(filmesFavoritos) || []);
  }, []);

  function delMovie(item) {
    let filtro = filmes.filter((filme) => {
      return item !== filme.id;
    });

    setFilmes(filtro);

    localStorage.setItem("@favoritos", JSON.stringify(filtro));
  }

  return (
    <div className="container">
      <h1>Meus Filmes</h1>
      {filmes.map((item) => {
        return (
          <div key={item.id} className="container-filmes">
            <div className="container-h1">
              <h1>{item.title}</h1>
            </div>
            <div id="container-btn-link">
              <a
                href={`https://www.youtube.com/results?search_query=trailer+${item.title}`}
              >
                Trailer
              </a>
              <button onClick={() => delMovie(item.id)}>Excluir</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
