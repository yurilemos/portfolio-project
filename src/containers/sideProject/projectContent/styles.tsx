import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;

  & > * {
    width: 100%;
  }
`;

export const CardList = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  & > div {
    max-width: 465px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  & > div {
    max-width: 400px;
  }

  a {
    color: var(--white-color);
    padding: 1rem 2rem;
    border-radius: 30px;
    width: fit-content;
    text-decoration: none;
    text-align: center;
  }
  a:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  & > * {
    flex: 1;
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;
