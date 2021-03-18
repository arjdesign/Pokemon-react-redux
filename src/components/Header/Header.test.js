import { prettyDOM, render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

test("should render header", () => {
  const { getByText } = render(<Header />);
  //console.log(prettyDOM());
  expect(getByText("PokeFinder")).toBeTruthy();
});
