import React from "react";
import { DevSkills } from "../../containers/devSkills";
import { Content } from "./styles";
import {
  CardDescriptionContainer,
  CardTitleContainer,
} from "../../containers/introductionCard/components/cardContainer";
import { Header } from "../../components/header";

export const Home = () => {
  return (
    <Content>
      <Header />
      <CardTitleContainer />
      <DevSkills />
      <CardDescriptionContainer />
    </Content>
  );
};
