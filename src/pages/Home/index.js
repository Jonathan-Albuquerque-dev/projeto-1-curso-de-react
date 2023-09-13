import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./style.css";

//https://api.themoviedb.org/3/discover/movie?api_key=85ce3425b5f20922bf81d5bb096cb42a&language=pt-br

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "85ce3425b5f20922bf81d5bb096cb42a",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 10));
      setLoad(false);
    }

    loadFilmes();
  }, []);

  if (load) {
    return (
      <div className="load">
        <h2>Carregando filme...</h2>
      </div>
    );
  }

  return (
    <div className="container-main">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <h2>{filme.title}</h2>
              <img
                src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/movies/${filme.id}`}>Informações do Filme</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
