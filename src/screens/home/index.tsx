import React from "react";
import { DevSkills } from "../../containers/devSkills";
import { Content } from "./styles";
import {
  CardDescriptionContainer,
  CardTitleContainer,
} from "../../containers/introductionCard/components/cardContainer";
import { Header } from "../../components/header";
import { WorkContent } from "../../containers/workSection";
import { ProjectContent } from "../../containers/sideProject";

export const Home = () => {
  return (
    <Content>
      <Header />
      <CardTitleContainer />
      <DevSkills />
      <CardDescriptionContainer />
      <ProjectContent />
      <WorkContent />
    </Content>
  );
};
