import React, { useRef } from "react";
import { Card } from "../../../../components/card";
import {
  CardContainerTitle,
  LinkContent,
  NameContent,
  CardContainerDescription,
  LinkedInImg,
  Content,
} from "./styles";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../../assets/persona-animation.json";

interface PropsTitle {
  name: string;
  descriptions?: string[];
  githubLink: string;
  linkedInLink: string;
  email: string;
  id?: string;
}

interface PropsDescription {
  descriptions: string[];
  id?: string;
}

export const TitleCard = ({
  name,
  descriptions,
  githubLink,
  linkedInLink,
  email,
  id
}: PropsTitle) => {
  const personaRef = useRef<LottieRefCurrentProps>(null);

  return (
    <Content id={id}>
    <Card>
      <CardContainerTitle>
        <NameContent>
          <h1>Hello, my name is {name}</h1>
          {descriptions?.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </NameContent>
        <Lottie
          animationData={animationData}
          style={{ width: "300px" }}
          className="persona-animation"
          lottieRef={personaRef}
          onComplete={() => {
            console.log("complete");
            personaRef.current?.goToAndPlay(15);
          }}
          loop={false}
        />

        <LinkContent>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <img src="images/github-icon.svg" alt="github" />
          </a>
          <LinkedInImg href={linkedInLink} target="_blank" rel="noreferrer">
            <img src="images/linkedIn-icon.svg" alt="linkedIn" />
          </LinkedInImg>
          <a
            href={`mailto:${email}subject=About the portfolio`}
            target="_blank"
            rel="noreferrer"
          >
            <img src="images/mail-icon.svg" alt="email" />
          </a>
        </LinkContent>
      </CardContainerTitle>
    </Card>
    </Content>
  );
};

export const DescriptionCard = ({ descriptions, id }: PropsDescription) => {
  return (
    <Content id={id}>
      <Card>
        <CardContainerDescription>
          {descriptions?.map((description) => (
            <p key={description}>{description}</p>
          ))}
        </CardContainerDescription>
      </Card>
    </Content>
  );
};
