import React, { ReactNode } from "react";
import { CardStyle } from "./styles";

export const Card = ({
  children,
  style,
  hasBorder = false,
  id,
}: {
  children: ReactNode;
  style?: any;
  hasBorder?: boolean;
  id?: string;
}) => {
  return (
    <CardStyle style={style} hasborder={hasBorder.toString()} id={id}>
      {children}
    </CardStyle>
  );
};
