import { prettyDOM, render } from "@testing-library/react";
import React from "react";

import PokemonTile from "./PokemonTile";

const pokemon = {
  id: 1,
  name: "FunnyBird",
  height: 70,
  weight: 40,
  sprites: { back_default: "/ImageURL" },
  base_experience: 100,
};

test("should render alt image text", () => {
  const { getByAltText } = render(<PokemonTile pokemon={pokemon} />);
  //console.log(prettyDOM());
  expect(getByAltText("FunnyBird")).toBeTruthy();
});
