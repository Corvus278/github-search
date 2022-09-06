import { FC } from "react";
import { Oval } from "react-loader-spinner";

type Props = {
  height?: number;
  width?: number;
  color?: string;
  secondaryColor?: string;
};

export const Spinner: FC<Props> = (props) => {
  return (
    <Oval
      height={props.height || 50}
      width={props.width || 50}
      color={props.color || "#8957e5"}
      secondaryColor={props.secondaryColor || "#a775ff"}
    ></Oval>
  );
};
