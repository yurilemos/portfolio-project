import React from "react";
import { Link } from "react-router-dom";
import { HeaderContent, LinksContent } from "./styles";

export const Header = () => {
  return (
    <HeaderContent>
      <Link to="/">
        <img src="images/project-icon.svg" alt="icon" />
      </Link>
      <LinksContent>
        <Link to="/">Feedback</Link>
        <Link to="/">About me</Link>
      </LinksContent>
    </HeaderContent>
  );
};
