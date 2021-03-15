const MIN = 1;
const MAX = 899;

export const pokemons = {
  squirtle: 7,
  charmander: 4,
  balbasur: 1,
};

export const randomPokeId = () => {
  const randPokeId = Math.floor(Math.random() * (MAX - MIN) + MIN);
  if (randPokeId !== 7 && randPokeId !== 4 && randPokeId !== 1) {
    return randPokeId;
  } else {
    randPokeId();
  }
};
