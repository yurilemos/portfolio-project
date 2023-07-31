import React from "react";
import { ButtonContained, ButtonOutlined } from "./styles";

interface AnchorButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "contained" | "outlined";
  style?: any;
}

export const AnchorButton = ({
  children,
  href,
  variant = "contained",
  style,
}: AnchorButtonProps) => {
  if (variant === "contained")
    return (
      <ButtonContained href={href} target="_blank" style={style}>
        {children}
      </ButtonContained>
    );

  return (
    <ButtonOutlined href={href} target="_blank" style={style}>
      {children}
    </ButtonOutlined>
  );
};
