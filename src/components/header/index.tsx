import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  HeaderContent, 
  HeaderTitle, 
  LinksContent, 
  SubMenuButton, 
  SubMenu,
  SubMenuItem,
  ScrollButton
} from "./styles";
import { AiOutlineMenu } from "react-icons/ai";



export const Header = () => {

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeSubmenu = ()=>{
    setIsSubMenuOpen(current => !current)
  }
  return (
    <HeaderContent>
      <HeaderTitle>My.portfolio</HeaderTitle>
      <LinksContent>
        {/* <Link to="/">Feedback</Link> */}
        <ScrollButton onClick={() => scrollToSection("experience")}>Experience</ScrollButton>
        <ScrollButton onClick={() => scrollToSection("projects")}>Projects</ScrollButton>
        {/* <Link to="/">About me</Link> */}
      </LinksContent>
      <SubMenuButton onClick={()=>{changeSubmenu()}}>
        <AiOutlineMenu style={{ width: '1.5rem', height: '1.5rem' }}/>
      </SubMenuButton>
      <SubMenu isopen={isSubMenuOpen.toString()}>
        <ScrollButton 
          onClick={() => {
            scrollToSection("experience")
            changeSubmenu()
          }}>
            Experience
        </ScrollButton>
        <ScrollButton 
          onClick={() => {
            scrollToSection("projects")
            changeSubmenu()
          }}>
            Projects
        </ScrollButton>        
      </SubMenu>
    </HeaderContent>
  );
};
