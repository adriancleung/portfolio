import { css } from "styled-components";
import { Styles } from "styled-components/dist/types";

const device = {
  xs: "400px",
  sm: "600px",
  md: "900px",
  lg: "1280px",
  xl: "1440px",
  xxl: "1920px",
};

const media = {
  xs: (args: Styles<object>) => css`
    @media (max-width: ${device.xs}) {
      ${css(args)};
    }
  `,
  sm: (args: Styles<object>) => css`
    @media (max-width: ${device.sm}) {
      ${css(args)};
    }
  `,
  md: (args: Styles<object>) => css`
    @media (max-width: ${device.md}) {
      ${css(args)};
    }
  `,
  lg: (args: Styles<object>) => css`
    @media (max-width: ${device.lg}) {
      ${css(args)};
    }
  `,
  xl: (args: Styles<object>) => css`
    @media (max-width: ${device.xl}) {
      ${css(args)};
    }
  `,
  xxl: (args: Styles<object>) => css`
    @media (max-width: ${device.xxl}) {
      ${css(args)};
    }
  `,
};

export { media };
