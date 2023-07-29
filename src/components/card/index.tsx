import React, { ReactNode } from "react";
import { CardStyle } from "./styles";

export const Card = ({ children }: { children: ReactNode }) => {
  return <CardStyle>{children}</CardStyle>;
};
