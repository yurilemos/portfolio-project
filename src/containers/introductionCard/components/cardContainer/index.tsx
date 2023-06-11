import { TitleCard, DescriptionCard } from "../titleCard";
import { userInfo, userDescription } from "./fields";

export const CardTitleContainer = () => {
  return <TitleCard {...userInfo} />;
};

export const CardDescriptionContainer = () => {
  return <DescriptionCard descriptions={userDescription} />;
};
