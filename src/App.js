import React, { useEffect } from "react";
import Search from "./components/Search/Search";
import { useSelector, useDispatch } from "react-redux";
import PokemonList from "./components/PokemonList/PokemonList";
import { Text } from "./themes/globalStyles";
import DisplayMessage from "./components/Loading/DisplayMessage";

import { initialFetch } from "./store/actions/actions";

function App() {
  const initialPokiData = useSelector((state) => state.inititalFetchPoki.data);
  const randomPokiData = useSelector((state) => state.randomFetchPoki.data);
  const initialPokiDataIsLoading = useSelector(
    (state) => state.inititalFetchPoki.loading
  );
  const randomPokiDataIsLoading = useSelector(
    (state) => state.randomFetchPoki.loading
  );
  console.count("APP");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialFetch);
  }, []);

  const displayInitialPokiData = initialPokiDataIsLoading ? (
    <DisplayMessage>
      <Text>Please Wait a bit, we are loading Pokemons for you.</Text>
    </DisplayMessage>
  ) : (
    <div>
      <PokemonList data={initialPokiData} />
    </div>
  );

  const displayRandomPokiData = randomPokiDataIsLoading ? (
    <DisplayMessage>
      <Text>One min plz! your favourite pokemon is loading.</Text>
    </DisplayMessage>
  ) : (
    <PokemonList data={randomPokiData} />
  );

  return (
    <>
      <Search />
      {displayInitialPokiData}
      {displayRandomPokiData}
    </>
  );
}

export default App;
