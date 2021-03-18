import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Search from "./components/Search/Search";
import useStoreData from "./hooks/useStoreData";
import PokemonList from "./components/PokemonList/PokemonList";
import { Text } from "./themes/globalStyles";
import DisplayMessage from "./components/Loading/DisplayMessage";
import { initialFetch } from "./store/actions/actions";

function App() {
  const {
    initialPokiData,
    randomPokiData,
    initialPokiDataIsLoading,
    randomPokiDataIsLoading,
  } = useStoreData();

  //console.count("APP");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialFetch);
  }, [dispatch]);

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
      <Text>One sec plz! your favourite Pokemon is loading.</Text>
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
