import { TitleCard, DescriptionCard } from "../titleCard";
import { userInfo, userDescription } from "./fields";

export const CardTitleContainer = ({ id }: { id?: string }) => {
  return <TitleCard {...userInfo} id={id} />;
};

export const CardDescriptionContainer = ({ id }: { id?: string }) => {
  return <DescriptionCard descriptions={userDescription} id={id} />;
};
