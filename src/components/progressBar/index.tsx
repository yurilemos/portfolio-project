import React from "react";
import {
  ProgressBarComponet,
  ProgressBarWrapper,
  ProgressBarContent,
} from "./styles";

interface ProgressBarProps {
  progress: number;
  name: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, name }) => {
  const handleCategory = () => {
    if (progress > 80) return "Advanced";
    if (progress > 40) return "Regular";
    return "Begginer";
  };

  const progresswidth = `${progress}%`; // Calcula a largura da cor de progresso em pixels

  return (
    <ProgressBarContent>
      <h4>{name}</h4>
      <ProgressBarComponet>
        <ProgressBarWrapper progresswidth={progresswidth} />
        {handleCategory()}
      </ProgressBarComponet>
    </ProgressBarContent>
  );
};

export default ProgressBar;
