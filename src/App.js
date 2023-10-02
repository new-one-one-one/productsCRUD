import React from "react";
import styled from "styled-components";

import Terminal from "./Terminal";

const StyledHeader = styled.h1`
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default function App() {
  return (
    <>
      <StyledHeader>
        How to specify only the title bar to be used to drag the terminal?
      </StyledHeader>
      <div className="App">
        <Terminal />
      </div>
    </>
  );
}
