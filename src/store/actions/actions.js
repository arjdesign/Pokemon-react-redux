import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_RANDOM_SUCCESS,
  FETCH_RANDOM_FAILURE,
} from "./actionTypes";

import { getPokemonApi } from "../../api";

import { pokemons, randomPokeId } from "../../helpers";

export const initialFetch = async (dispatch) => {
  const pokemonData = [];
  for (const prop in pokemons) {
    try {
      const res = await getPokemonApi(pokemons[prop]);
      if (res.data) {
        pokemonData.push(res.data);
      }
    } catch (error) {
      dispatch({
        type: FETCH_FAILURE,
      });
      console.error("FETCH_ERROR", error);
    }
  }

  dispatch({
    type: FETCH_SUCCESS,
    payload: pokemonData,
  });
};

export const fetchRandomPokemon = async (dispatch) => {
  try {
    const randPokeId = randomPokeId();
    const res = await getPokemonApi(randPokeId);
    console.log("fetchData poke", res.data);
    dispatch({
      type: FETCH_RANDOM_SUCCESS,
      payload: [res.data],
    });
  } catch (error) {
    dispatch({
      type: FETCH_RANDOM_FAILURE,
    });
    console.error("FETCH_RANDOM_FAILURE", error.message);
  }
};
