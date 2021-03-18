import React from "react";
import PropTypes from "prop-types";

import {
  PokemonCard,
  PokemonInfo,
  PokemonLogo,
  PokemonName,
  Feature,
  PokemonFeatures,
} from "./PokemonTile.style";

function PokemonTile({ pokemon }) {
  const {
    name,
    height,
    weight,
    sprites: { back_default },
    base_experience,
  } = pokemon;

  return (
    <>
      <PokemonCard>
        <PokemonInfo>
          <PokemonName>{name}</PokemonName>
          <PokemonLogo>
            <img alt={name} src={back_default} width="150" height="150" />
          </PokemonLogo>
          <PokemonFeatures>
            <Feature>
              Base Experience:<strong> {base_experience}</strong>
            </Feature>
            <Feature>
              Weight: <strong> {weight}</strong>
            </Feature>
            <Feature>
              Height: <strong> {height}</strong>
            </Feature>
          </PokemonFeatures>
        </PokemonInfo>
      </PokemonCard>
    </>
  );
}

PokemonTile.propTypes = {
  name: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
  back_default: PropTypes.string,
  base_experience: PropTypes.number,
};

export default PokemonTile;
