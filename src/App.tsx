import React from "react";
import styled from "styled-components";
import Hero from "./screens/Hero";
import Work from "./screens/Work";
import Projects from "./screens/Projects";

const WrapperContainer = styled.div`
  background-color: #fbfcf8;
`;

const App = () => {
  return (
    <WrapperContainer>
      <Hero />
      <Work />
      <Projects />
    </WrapperContainer>
  );
};

export default App;
