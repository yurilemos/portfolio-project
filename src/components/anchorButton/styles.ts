import styled from "styled-components";

export const ButtonContained = styled.a`
  display: inline-block;
  text-align: center;
  padding: 10px 20px;

  width: 200px;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
`;

export const ButtonOutlined = styled.a`
  display: inline-block;
  text-align: center;
  padding: 10px 20px;
  width: 200px;
  text-decoration: none;
  color: transparent; /* Texto transparente */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 30px;
    padding: 1px;
    background: linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  &:hover {
    &::before {
      opacity: 0.8; /* Ajuste a transparência conforme desejado */
    }
  }
`;
