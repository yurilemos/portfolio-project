import styled from "styled-components";

export const Content = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  
`;

export const TechnologiesContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 2rem 0;
  @media (max-width: 510px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TechnologiesItem = styled.div`
  width: 48%;
  @media (max-width: 510px) {
    width: 100%;
  }
`;
