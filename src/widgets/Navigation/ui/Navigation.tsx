import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {};

export const Navigation: FC<Props> = (props) => {
  return (
    <nav
      className={
        "flex justify-between items-center h-[50px] px-5 shadow-md bg-primary text-white"
      }
    >
      <h3 className={"font-bold"}>
        <Link to={"/"}>Github Search</Link>
      </h3>

      <ul className={"flex gap-2"}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/favourites"}>Favourites</Link>
        </li>
      </ul>
    </nav>
  );
};
