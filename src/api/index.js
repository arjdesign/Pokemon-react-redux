import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const getPokemonApi = (url) => axios.get(`${BASE_URL}${url}`);

//Use if cors issue exists. We do not need in this case.
export const netlifyCompatibleApi = (url) =>
  axios.get(`/cors-proxy/${BASE_URL}${url}`)