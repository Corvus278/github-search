import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = (props) => {
  return (
    <div
      className={
        "flex flex-col items-center pt-10 mx-auto h-screen max-w-[560px]"
      }
    >
      {props.children}
    </div>
  );
};
