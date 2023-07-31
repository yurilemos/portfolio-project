import styled, { css } from "styled-components";

interface CardStyleProps {
  hasborder?: string;
}

export const CardStyle = styled.div<CardStyleProps>`
  padding: 2rem 4rem;
  background-color: rgba(240, 240, 240, 0.1);
  color: white;
  border-radius: 10px;
  position: relative;

  ${({ hasborder }) =>
    hasborder === "true" &&
    css`
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 10px;
        padding: 1px;
        background: linear-gradient(
          -225deg,
          #ac32e4 0%,
          #7918f2 48%,
          #4801ff 100%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: -1;
      }
    `}

  @media (max-width: 690px) {
    padding: 1rem 2rem;
  }
`;
