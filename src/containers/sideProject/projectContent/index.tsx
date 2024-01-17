import React from "react";
import {
  ButtonContainer,
  CardContent,
  CardDescription,
  CardList,
  Content,
} from "./styles";
import { Card } from "../../../components/card";
import { AnchorButton } from "../../../components/anchorButton";

export const ProjectContent = ({ id }: { id?: string }) => {
  return (
    <Content id={id}>
      <h2>Side projects</h2>
      <CardList>
        <Card>
          <CardContent>
            <CardDescription>
              <h3>Guess Game project</h3>
              <p>To deepen my understanding of mobile development, I concurrently studied and created a basic game using the React Native framework.</p>
            </CardDescription>
            <ButtonContainer>
              <AnchorButton
                href="https://github.com/yurilemos/GuessGame"
                variant="outlined"
                style={{ maxWidth: '156.5px'}}
              >
                Access the git repository
              </AnchorButton>
            </ButtonContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardDescription>
              <h3>Restaurant project</h3>
              <p>To strengthen my grasp of Next.js, I built a restaurant search web application. I plan to enhance and integrate it into upcoming projects to deepen my proficiency in the framework.</p>
            </CardDescription>
            <ButtonContainer>
              <AnchorButton
                href="https://github.com/yurilemos/restaurant-project"
                variant="outlined"
                style={{ maxWidth: '156.5px'}}
              >
                Access the git repository
              </AnchorButton>
            </ButtonContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardDescription>
              <h3>AI project</h3>
              <p>To learn Next.js, I completed a coding course and worked on an AI project as part of the practical application of the framework.</p>
            </CardDescription>
            <ButtonContainer>
              <AnchorButton
                href="https://github.com/yurilemos/ai-project"
                variant="outlined"
                style={{ maxWidth: '156.5px'}}
              >
                Access the git repository
              </AnchorButton>
            </ButtonContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardDescription>
              <h3>This portfolio</h3>
              <p>I developed a portfolio to showcase my future projects.</p>
            </CardDescription>
            <ButtonContainer>
              <AnchorButton
                href="https://github.com/yurilemos/portfolio-project"
                variant="outlined"
                style={{ maxWidth: '156.5px'}}
              >
                Access the git repository
              </AnchorButton>
            </ButtonContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardDescription>
              <h3>Weather check project</h3>
              <p>
                I developed a weather web application where users can input an
                address, and the application retrieves weather information and
                additional details, including the coordinates, by calling an
                external API.
              </p>
            </CardDescription>
            <ButtonContainer>
              <AnchorButton href="https://yurilemos.github.io/climate-check/">
                Access the system
              </AnchorButton>
              <AnchorButton
                href="https://github.com/yurilemos/climate-check"
                variant="outlined"
              >
                Access the git repository
              </AnchorButton>
            </ButtonContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardDescription>
              <h3>login and registration system model</h3>
              <p>
                I developed a mock for login and registration of users for
                future projects.
              </p>
            </CardDescription>
            <ButtonContainer>
              <AnchorButton href="https://yurilemos.github.io/login-register-app/">
                Access the system.
              </AnchorButton>
              <AnchorButton
                href="https://github.com/yurilemos/login-register-app"
                variant="outlined"
              >
                Access the git repository
              </AnchorButton>
            </ButtonContainer>
          </CardContent>
        </Card>
      </CardList>
    </Content>
  );
};
