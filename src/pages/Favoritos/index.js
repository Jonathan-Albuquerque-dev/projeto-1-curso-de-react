import { useState, useEffect } from "react";
import "./style.css";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const filmesFavoritos = localStorage.getItem("@favoritos");
    if (filmesFavoritos) {
      setFilmes(JSON.parse(filmesFavoritos));
      setLoad(true);
    }

    //setFilmes(JSON.parse(filmesFavoritos));
  }, []);

  if (load === false) {
    return (
      <div>
        <h1>Nenhum Filme Adicionado</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {filmes.map((item) => {
        return (
          <div className="container-filmes">
            <h1>{item.title}</h1>

            <div className="div-img">
              <img
                src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt={item.title}
              />
            </div>
            <div>
              <p>{item.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
