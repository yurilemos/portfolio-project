import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > * {
    width: 100%;
    max-width: 600px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  .button1 {
    background-color: var(--primary-blue-color);
  }
  .button2 {
    background-color: var(--purple-color);
  }
`;
