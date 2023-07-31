import { TechnologiesContainer } from "../technologiesContainer";
import { skillList } from "./fields";

export const Technologies = ({ id } : { id?:string }) => {
  return <TechnologiesContainer skills={skillList} />;
};
