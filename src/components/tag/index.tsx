import React from "react";
import { TagComponent } from "./styles";

export const Tag = ({ name }: { name: string }) => {
  return <TagComponent>#{name}</TagComponent>;
};
