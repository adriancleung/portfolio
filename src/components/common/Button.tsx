import React, { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Styles } from 'styled-components/dist/types';

const ButtonContainer = styled.button<{ styleOverride?: Styles<object> }>`
  text-decoration: none;
  color: black;
  background-color: transparent;
  border: unset;
  cursor: pointer;
  font-size: 1rem;
  ${props => props.styleOverride && css(props.styleOverride)}
`;

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  styleOverride?: Styles<object>;
}

const Button = ({ children, onClick, styleOverride }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} styleOverride={styleOverride}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
