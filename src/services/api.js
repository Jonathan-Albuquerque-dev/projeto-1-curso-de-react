import axios from "axios";

// base url : https://api.themoviedb.org/3/

//https://api.themoviedb.org/3/discover/movie?api_key=85ce3425b5f20922bf81d5bb096cb42a&language=pt-br

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
