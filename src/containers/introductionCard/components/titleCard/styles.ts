import styled from "styled-components";


export const Content = styled.div`
  padding-top: 2rem;
`;
export const CardContainerTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 2rem 1rem;

  @media (max-width: 1125px) {
    gap: 3rem;
  }
  @media (max-width: 1040px) {
    .persona-animation {
      display: none;
    }
  }
  @media (max-width: 690px) {
    br {
      display: none;
    }
    padding: 0;
  }
`;

export const NameContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    background: -webkit-linear-gradient(
      -225deg,
      #ac32e4 0%,
      #7918f2 48%,
      #4801ff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.5;
  }
  p {
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 1030px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 945px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const LinkContent = styled.div`
  display: flex;
  gap: 2rem;
  margin: auto;

  img {
    width: 3rem;
    height: 3rem;
    transition: box-shadow 0.3s ease;
    border-radius: 50%;

    &:hover {
      box-shadow: 0px 4px 10px 0px var(--primary-blue-color);
    }
  }

  @media (max-width: 510px) {
    img {
      width: 2rem;
      height: 2rem;
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
  width: 2.9rem;
  height: 2.9rem;

  @media (max-width: 510px) {
    width: 1.9rem;
    height: 1.9rem;
  }
`;
