import styled from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;

  position: relative;
`;

export const HeaderTitle = styled.h2`
  position: absolute;
  left: 0;
`;

export const LinksContent = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;

  button {
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color: var(--white-color);
    text-decoration: none;
    transition: font-size 0.3s ease;
    cursor: pointer;
    background: none;
    border: none;
  }
  button:hover {
    font-size: 1.1em;
  }

  a {
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color: var(--white-color);
    text-decoration: none;
    transition: font-size 0.3s ease;
    cursor: pointer;
  }

  a:hover {
    font-size: 1.1em;
  }

  @media (max-width: 1030px) {
    display: none;
  }
`;
