import React from "react";
import { ButtonContained, ButtonOutlined } from "./styles";

interface AnchorButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "contained" | "outlined";
}

export const AnchorButton = ({
  children,
  href,
  variant = "contained",
}: AnchorButtonProps) => {
  if (variant === "contained")
    return (
      <ButtonContained href={href} target="_blank">
        {children}
      </ButtonContained>
    );

  return (
    <ButtonOutlined href={href} target="_blank">
      {children}
    </ButtonOutlined>
  );
};
