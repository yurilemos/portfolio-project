import React, { useState } from "react";
import { 
  HeaderContent, 
  HeaderTitle, 
  LinksContent, 
  SubMenuButton, 
  SubMenu,
  ScrollButton
} from "./styles";
import { AiOutlineMenu } from "react-icons/ai";


export const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsSubMenuOpen(false); 
    }
  };

  return (
    <HeaderContent>
      <HeaderTitle>My.portfolio</HeaderTitle>
      <LinksContent>
        <ScrollButton onClick={() => scrollToSection("experience")}>
          Experience
        </ScrollButton>
        <ScrollButton onClick={() => scrollToSection("projects")}>
          Projects
        </ScrollButton>
      </LinksContent>
      <SubMenuButton onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
        <AiOutlineMenu style={{ width: "1.5rem", height: "1.5rem" }} />
      </SubMenuButton>
      <SubMenu isopen={isSubMenuOpen.toString()}>
        <ScrollButton onClick={() => scrollToSection("experience")}>
          Experience
        </ScrollButton>
        <ScrollButton onClick={() => scrollToSection("projects")}>
          Projects
        </ScrollButton>
      </SubMenu>
    </HeaderContent>
  );
};

