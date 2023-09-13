import { useState, useEffect } from "react";
import api from "../../services/api";

//https://api.themoviedb.org/3/discover/movie?api_key=85ce3425b5f20922bf81d5bb096cb42a&language=pt-br

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("discover/movie", {
        params: {
          api_key: "85ce3425b5f20922bf81d5bb096cb42a",
          languege: "pt-BR",
          page: 1,
        },
      });

      console.log(response);
    }

    loadFilmes();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
