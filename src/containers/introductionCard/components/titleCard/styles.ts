import styled from "styled-components";

export const CardContainerTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const NameContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;

  h1 {
    font-size: 3.5rem;
  }
  p {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const LinkContent = styled.div`
  display: flex;
  gap: 2rem;
  margin: auto;

  img {
    width: 4rem;
    height: 4rem;
    transition: box-shadow 0.3s ease;
    border-radius: 50%;

    &:hover {
      box-shadow: 0px 4px 10px 0px var(--primary-blue-color);
    }
  }
`;

export const CardContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 1rem;
`;

export const LinkedInImg = styled.a`
  background: white;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
`;
