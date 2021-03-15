import styled from "styled-components";

export const PokemonCard = styled.div`
  background-color: ${(props) => props.theme.card};
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.7);
  width: 300px;
  margin: 25px;
  height: 350px;
  border-radius: 4px;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 7px;
  align-items: center;
`;

export const PokemonName = styled.h3`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: ${(props) => props.theme.pokemonName};
  transition: all 0.5s ease;
`;

export const PokemonLogo = styled.div`
  margin: 20px 0 0;
`;

export const PokemonFeatures = styled.ul`
  margin: 16px 0 16px;
  list-style: none;
  display: flex;
  color: ${(props) => props.theme.pokemonProperty};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Feature = styled.li`
  margin-bottom: 10px;
  align-items: center;
  transition: all 0.5s ease;
`;
