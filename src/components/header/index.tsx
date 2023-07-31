import React from "react";
import { Link } from "react-router-dom";
import { HeaderContent, HeaderTitle, LinksContent } from "./styles";


export const Header = () => {

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HeaderContent>
      <HeaderTitle>My.portfolio</HeaderTitle>

      <LinksContent>
        {/* <Link to="/">Feedback</Link> */}
        <button onClick={() => scrollToSection("experience")}>Experience</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        {/* <Link to="/">About me</Link> */}
      </LinksContent>
    </HeaderContent>
  );
};
