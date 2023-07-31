import styled from "styled-components";


interface SubMenuProps {
  isopen?: string;
}




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

export const SubMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-white);  
  border-radius: 30px;
  transition: background-color 0.5s ease;
  padding: 0.2rem 0.3rem;

  
  &:active {
    background-color: rgba(240, 248, 255, 0.1);
  }

  @media (max-width: 1030px) {
    display: unset;
    position: absolute;
    right: 0;
  }
`;

export const LinksContent = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;


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

export const SubMenu = styled.div<SubMenuProps>`
  display: ${({ isopen }) => (isopen === 'true' ? "flex" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(240, 240, 240, 0.5);
  padding: 2rem 1rem;  
  flex-direction: column;
  gap: 2rem;
  color: black;
  z-index: 5;
  align-items: baseline;
`;

export const SubMenuItem = styled.div`
  padding: 0.5rem;  
`;


export const ScrollButton = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  color: var(--white-color);
  text-decoration: none;
  transition: font-size 0.3s ease;
  cursor: pointer;
  background: none;
  border: none;  

  @media (min-width: 1031px) {
    &:hover {
      font-size: 1.1rem;
    }
  }
`;

