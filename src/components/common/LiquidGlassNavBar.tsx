import React from "react";
import styled from "styled-components";
import LiquidGlassContainer from "./LiquidGlassContainer";
import { media } from "../../styles/breakpoints";

const NavLink = styled.a`
  width: 10rem;
  height: 4rem;
  text-align: center;
  align-content: center;
  text-decoration: none;
  color: #1d1d1f;
  font-weight: bold;
  z-index: 1;
  border-radius: 1rem;
  transition: 0.3s;

  ${media.lg`
    height: 3rem;
  `}

  &:hover {
    background-color: rgba(141, 183, 222, 0.14);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const LiquidGlassNavBar = () => {
  return (
    <LiquidGlassContainer>
      <NavLink href="#work">Work</NavLink>
      <NavLink href="#projects">Projects</NavLink>
    </LiquidGlassContainer>
  );
};

export default LiquidGlassNavBar;
