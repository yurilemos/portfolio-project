import React from "react";
import { Card } from "../../../../components/card";
import {
  CardContainerTitle,
  LinkContent,
  NameContent,
  CardContainerDescription,
  LinkedInImg,
} from "./styles";

interface PropsTitle {
  name: string;
  descriptions?: string[];
  githubLink: string;
  linkedInLink: string;
  email: string;
}

interface PropsDescription {
  descriptions: string[];
}

export const TitleCard = ({
  name,
  descriptions,
  githubLink,
  linkedInLink,
  email,
}: PropsTitle) => {
  return (
    <Card>
      <CardContainerTitle>
        <NameContent>
          <h1>{name}</h1>
          {descriptions?.map((description) => (
            <p>{description}</p>
          ))}
        </NameContent>
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
  );
};

export const DescriptionCard = ({ descriptions }: PropsDescription) => {
  return (
    <Card>
      <CardContainerDescription>
        {descriptions?.map((description) => (
          <p>{description}</p>
        ))}
      </CardContainerDescription>
    </Card>
  );
};
