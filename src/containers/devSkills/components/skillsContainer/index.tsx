import React from "react";
import { TagContent } from "./styles";
import { Tag } from "../../../../components/tag";

interface Props {
  skills: string[];
}

export const SkillsContainer = ({ skills }: Props) => {
  return (
    <TagContent>
      {skills?.map((skill) => (
        <Tag name={skill} />
      ))}
    </TagContent>
  );
};
