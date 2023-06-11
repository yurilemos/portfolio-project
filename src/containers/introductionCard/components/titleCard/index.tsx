import React from "react";
import { OutlinedCard } from "../../../../components/outlinedCard";
import {
  CardContainerTitle,
  LinkContent,
  NameContent,
  CardContainerDescription,
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
    <OutlinedCard>
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
          <a href={linkedInLink} target="_blank" rel="noreferrer">
            <img src="images/linkedIn-icon.svg" alt="linkedIn" />
          </a>
          <a
            href={`mailto:${email}subject=About the portfolio`}
            target="_blank"
            rel="noreferrer"
          >
            <img src="images/mail-icon.svg" alt="email" />
          </a>
        </LinkContent>
      </CardContainerTitle>
    </OutlinedCard>
  );
};

export const DescriptionCard = ({ descriptions }: PropsDescription) => {
  return (
    <OutlinedCard>
      <CardContainerDescription>
        {descriptions?.map((description) => (
          <p>{description}</p>
        ))}
      </CardContainerDescription>
    </OutlinedCard>
  );
};
