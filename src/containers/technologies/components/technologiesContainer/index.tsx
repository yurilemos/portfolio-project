import React from "react";
import { Content, TechnologiesContent, TechnologiesItem } from "./styles";
import ProgressBar from "../../../../components/progressBar";

interface Props {
  skills: { name: string; progress: number }[];
  id?: string;
}

export const TechnologiesContainer = ({ skills, id }: Props) => {
  return (
    <Content id={id}>
      <h2>Technologies</h2>
      <TechnologiesContent>
        {skills?.map((skill) => (
          <TechnologiesItem>
            <ProgressBar
              key={skill.name}
              name={skill.name}
              progress={skill.progress}
            />
          </TechnologiesItem>
        ))}
      </TechnologiesContent>
    </Content>
  );
};
