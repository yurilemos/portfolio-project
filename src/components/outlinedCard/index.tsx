import React, { ReactNode } from "react";
import { Card } from "./styles";

export const OutlinedCard = ({ children }: { children: ReactNode }) => {
  return <Card>{children}</Card>;
};
