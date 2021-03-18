import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_INIT_RANDOM,
  FETCH_RANDOM_SUCCESS,
  FETCH_RANDOM_FAILURE,
} from "./actionTypes";

import { getPokemonApi } from "../../api";

const pokemons = {
  squirtle: 7,
  charmander: 4,
  balbasur: 1,
};

/***
 * jest.mock('../../api', () => {data: {name: 'pkemon'}})
 *
 *
 *
 */

import { randomPokeId } from "../../helpers";

export const initialFetch = async (dispatch) => {
  try {
    const pokemonData = [];
    for (const prop in pokemons) {
      const res = await getPokemonApi(pokemons[prop]);
      if (res.data) {
        pokemonData.push(res.data);
      }
    }
    dispatch({
      type: FETCH_SUCCESS,
      payload: pokemonData,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FAILURE,
    });
    console.error("FETCH_FAILURE", error.message);
  }
};

export const fetchRandomPokemon = async (dispatch) => {
  try {
    dispatch({
      type: FETCH_INIT_RANDOM,
    });
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
