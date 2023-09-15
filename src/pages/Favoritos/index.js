import { useState, useEffect } from "react";
import "./style.css";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const filmesFavoritos = localStorage.getItem("@favoritos");
    setFilmes(JSON.parse(filmesFavoritos));
  }, []);

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
