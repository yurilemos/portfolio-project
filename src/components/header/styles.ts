import styled from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--primary-blue-color);
`;

export const LinksContent = styled.div`
  display: flex;
  gap: 2rem;

  a {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--primary-blue-color);
    text-decoration: none;
    transition: font-size 0.3s ease;
  }

  a:hover {
    font-size: 1.6em;
  }
`;
