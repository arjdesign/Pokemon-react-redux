import React from "react";
import { SearchContainer, SearchButton } from "./Search.style";
import { useDispatch } from "react-redux";
import { fetchRandomPokemon } from "../../store/actions/actions";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <>
      <SearchContainer>
        <SearchButton
          type="submit"
          value="Search"
          onClick={() => dispatch(fetchRandomPokemon)}
        >
          Random Pokemon
        </SearchButton>
      </SearchContainer>
    </>
  );
};

export default Search;
