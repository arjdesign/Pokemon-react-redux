import React, { useState } from "react";
import App from "../App";
import Header from "../components/Header/Header";
import { ThemeProvider } from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { Container, Toggle, themes } from "./globalStyles";

function Theme() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      //console.log("clicked")
    } else {
      setTheme("light");
    }
  }

  const icon = theme === "light" ? <HiMoon size={30} /> : <CgSun size={30} />;

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Header>
          <Toggle onClick={changeTheme}>{icon}</Toggle>
        </Header>

        <Container>
          <App />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Theme;
