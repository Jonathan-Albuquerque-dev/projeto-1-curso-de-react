import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

export default function Movies() {
  const [filme, setFilme] = useState({});
  const { id } = useParams();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "85ce3425b5f20922bf81d5bb096cb42a",
            language: "pt-BR",
          },
        })
        .then((response) => {
          console.log(response.data);
          setFilme(response.data);
          setLoad(false);
        })
        .catch(() => {
          console.log("Filme nao encontrado");
        });
    }

    loadFilme();
  }, [id]);

  if (load) {
    return (
      <div>
        <h1>Carregando filme...</h1>
      </div>
    );
  }

  return (
    <div className="container-main">
      <article className="container-filme">
        <h1>{filme.title}</h1>
        <img
          src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
          alt={filme.title}
        />
        <h3>Sinopse:</h3>
        <p>{filme.overview}</p>
        <div className="container-btn">
          <a href="#" className="btn green">
            Favoritos
          </a>
          <a
            href={`https://www.youtube.com/results?search_query=trailer+${filme.title}`}
            className="btn red"
            target="_black"
          >
            Trailer
          </a>
        </div>
      </article>
    </div>
  );
}
