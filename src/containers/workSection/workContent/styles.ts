import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;
  padding-top: 2rem;
`;
export const Works = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const CardContainer = styled.div`
  max-width: 230px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 100%;

  a {
    text-decoration: none;
    color: transparent; /* Torna o texto transparente para ocultá-lo */
    background-image: linear-gradient(
      -225deg,
      #ac32e4 0%,
      #7918f2 48%,
      #4801ff 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
  }

  a:hover {
    text-shadow: 0 0 5px rgba(172, 50, 228, 0.8);
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;
