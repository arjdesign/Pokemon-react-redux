import React from "react";
import { PokeContainer } from "../../themes/globalStyles";

function DisplayMessage(props) {
  return <PokeContainer>{props.children}</PokeContainer>;
}

export default DisplayMessage;
