import React from "react";

import {
  PokemonCard,
  PokemonInfo,
  PokemonLogo,
  PokemonName,
  Feature,
  PokemonFeatures,
  CompanyName,
} from "./PokemonTile.style";

export default function PokemonTile({ pokemon }) {
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
