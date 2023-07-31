import React from "react";
import { Card } from "../../../components/card";
import { CardContainer, CardContent, CardDescription, Works } from "./styles";

export const WorkContent = ({ id }: { id?: string }) => {
  return (
    <CardContent id={id}>
      <h2>Work experience</h2>
      <Works>
        <Card hasBorder>
          <CardContainer>
            <CardDescription>
              <h3>BEE4</h3>
              <p>
                I specialize in building React.js applications and occasionally
                contribute to the development of the backend using .NET. In one
                of the company's systems, I am involved in developing the system
                that manages data for the listing of partner companies.
              </p>
            </CardDescription>
            <a href="https://bee4.com.br/" target="_blank" rel="noreferrer">Check company website</a>
          </CardContainer>
        </Card>
        <Card hasBorder>
          <CardContainer>
            <CardDescription>
              <h3>Lawing</h3>
              <p>
                I actively contributed to the frontend development of a
                cutting-edge document automation system, streamlining the
                process of generating and managing documents efficiently.
              </p>
            </CardDescription>
            <a href="https://lawing.com.br/" target="_blank" rel="noreferrer">Check company website</a>
          </CardContainer>
        </Card>
        <Card hasBorder>
          <CardContainer>
            <CardDescription>
              <h3>Parafernalia Interativa</h3>
              <p>
                I took the lead in crafting Parafernalia Interativa's website,
                faithfully implementing a custom design using pure HTML, CSS,
                and JavaScript.
              </p>
            </CardDescription>
            <a href="https://www.parafernalia.net.br/" target="_blank" rel="noreferrer">
              Check the developed website
            </a>
          </CardContainer>
        </Card>
        <Card hasBorder>
          <CardContainer>
            <CardDescription>
              <h3>GloboLab Dados</h3>
              <p>
                Intern at the Globo Lab Dados Technological Innovation Program,
                sponsored by Rede Globo. The program aimed to propose and
                develop projects to address specific themes, with each cycle
                focusing on different objectives
              </p>
            </CardDescription>
            <a href="http://ideiaglobo.les.inf.puc-rio.br/" target="_blank" rel="noreferrer">
              Check the program
            </a>
          </CardContainer>
        </Card>
        <Card hasBorder>
          <CardContainer>
            <CardDescription>
              <h3>EcoSistemas</h3>
              <p>
                I was involved in both database maintenance and the development
                of the new web system for the company, which was being built
                using Angular and .Net.
              </p>
            </CardDescription>
            <a href="https://www.ecosistemas.com.br/" target="_blank" rel="noreferrer">Check company website</a>
          </CardContainer>
        </Card>
      </Works>
    </CardContent>
  );
};
