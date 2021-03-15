import React from "react";
import PokemonTile from "../PokemonTile/PokemonTile";
import { PokeContainer } from "../../themes/globalStyles";
function PokemonList({ data }) {
  const pokemons =
    data &&
    data.map((pokemon) => (
      <div key={pokemon.id}>
        <PokemonTile pokemon={pokemon} />
      </div>
    ));
  return <PokeContainer>{pokemons}</PokeContainer>;
}

export default PokemonList;
