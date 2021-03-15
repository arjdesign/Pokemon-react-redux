//Table of contents

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    font-family: "Source Sans Pro", sans-serif;
    
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 900;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  @media screen and (max-width: 991px) {
    postion: absolute;
    display: flex;
    flex-direction: column;
  }
  transition: all 0.5s ease;
`;

//1) Theme

const LightTheme = {
  header: "#5865e0",
  background: "#F5F6F8",
  card: "#FFFFFF",
  pokemonName: "#131516",
  pokemonProperty: "#555f61",
};

const DarkTheme = {
  header: "#19212D",
  background: "#19212D",
  card: "#131822",
  pokemonName: "#F2F3F4",
  pokemonProperty: "#DADEDF",
};

export const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export const Toggle = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Text = styled.span`
  margin: 20px;
  color: ${(props) => props.theme.pokemonName};
`;

export const PokeContainer = styled(Container)`
padding:  0;
flex-direction: row;
justify-content: center;
display: flex;
flex-wrap:wrap;
align-items: center;
${Container}
@media screen and (max-width: 960px) {
  display: flex;
  margin:10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default GlobalStyle;
