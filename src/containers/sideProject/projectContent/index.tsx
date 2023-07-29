import React from "react";
import { ButtonContainer, CardContent, Content } from "./styles";
import { Card } from "../../../components/card";

export const ProjectContent = () => {
  return (
    <Content>
      <h2>Side projects</h2>
      <Card>
        <CardContent>
          <h3>Weather check project</h3>
          <p>
            I developed a weather web application where users can input an
            address, and the application retrieves weather information and
            additional details, including the coordinates, by calling an
            external API.
          </p>
          <ButtonContainer>
            <a
              href="https://yurilemos.github.io/climate-check/"
              target="_blank"
              rel="noreferrer"
              className="button1"
            >
              Access the system.
            </a>
            <a
              href="https://github.com/yurilemos/climate-check"
              target="_blank"
              rel="noreferrer"
              className="button2"
            >
              Access the git repository.
            </a>
          </ButtonContainer>
        </CardContent>
        <CardContent>
          <h3>Sign in sign out model</h3>
          <p>
            I developed a mock for login and registration of users for future
            projects.
          </p>
          <ButtonContainer>
            <a
              href="https://yurilemos.github.io/login-register-app/"
              target="_blank"
              rel="noreferrer"
              className="button1"
            >
              Access the system.
            </a>
            <a
              href="https://github.com/yurilemos/login-register-app"
              target="_blank"
              rel="noreferrer"
              className="button2"
            >
              Access the git repository.
            </a>
          </ButtonContainer>
        </CardContent>
      </Card>
    </Content>
  );
};
