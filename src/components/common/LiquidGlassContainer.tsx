import React, { ReactNode } from "react";
import styled from "styled-components";
import { media } from "../../styles/breakpoints";

const Glass = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 6rem;
  isolation: isolate;
  touch-action: none;
  border-radius: 28px;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);

  ${media.lg`
    width: 90%;
    height: 4rem;
    border-radius: 16px;
  `}

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: 28px;
    box-shadow: inset 0px 0px 20px -5px rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.4);

    ${media.lg`
      border-radius: 16px;
    `}
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 28px;
    backdrop-filter: blur(2px);
    filter: url(#glass-distortion);
    isolation: isolate;
    -webkit-backdrop-filter: blur(2px);
    -webkit-filter: url("#glass-distortion");

    ${media.lg`
      border-radius: 16px;
    `}
  }
`;

interface LiquidGlassContainerProps {
  children: ReactNode;
}

const LiquidGlassContainer = ({ children }: LiquidGlassContainerProps) => {
  return (
    <>
      <Glass>{children}</Glass>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        style={{ position: "absolute", overflow: "hidden" }}
      >
        <defs>
          <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.005"
              numOctaves="1"
              seed="92"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="75"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default LiquidGlassContainer;
