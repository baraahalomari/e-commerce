import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 1072px) {
      ${props}
    }
  `;
};
export const mobileSmall = (props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
};
