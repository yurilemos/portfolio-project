import React from "react";
import { Card } from "../../../components/card";
import { CardContainer, CardContent, Works } from "./styles";

export const WorkContent = () => {
  return (
    <CardContent>
      <h2>Work projects</h2>
      <Works>
        <Card>
          <CardContainer>
            <h3>BEE4</h3>
            <p>
              I specialize in building React.js applications and occasionally
              contribute to the development of the BackEnd using .NET
            </p>
          </CardContainer>
        </Card>
        <Card>
          <CardContainer>
            <h3>Lawing</h3>
            <p>
              I actively contributed to the frontend development of a
              cutting-edge document automation system, streamlining the process
              of generating and managing documents efficiently.
            </p>
          </CardContainer>
        </Card>
        <Card>
          <CardContainer>
            <h3>Parafernalia Interativa</h3>
            <p>
              I took the lead in crafting Parafernalia Interativa's website,
              faithfully implementing a custom design using pure HTML, CSS, and
              JavaScript.
            </p>
          </CardContainer>
        </Card>
        <Card>
          <CardContainer>
            <h3>GloboLab Dados</h3>
            <p>
              Intern at the Globo Lab Dados Technological Innovation Program,
              sponsored by Rede Globo. The program aimed to propose and develop
              projects to address specific themes, with each cycle focusing on
              different objectives
            </p>
          </CardContainer>
        </Card>
        <Card>
          <CardContainer>
            <h3>EcoSistemas</h3>
            <p>
              I was involved in both database maintenance and the development of
              the new web system for the company, which was being built using
              Angular and .Net.
            </p>
          </CardContainer>
        </Card>
      </Works>
    </CardContent>
  );
};
