import { FC } from "react";
import { Link } from "react-router-dom";
import { REACT_APP_ROOT_URL } from "../../../shared/lib/config";

type Props = {};

export const Navigation: FC<Props> = (props) => {
  return (
    <nav
      className={
        "flex justify-between items-center h-[50px] px-5 shadow-md bg-primary text-white"
      }
    >
      <h3 className={"font-bold"}>
        <Link to={`${REACT_APP_ROOT_URL}`}>Github Search</Link>
      </h3>

      <ul className={"flex gap-2"}>
        <li>
          <Link to={REACT_APP_ROOT_URL}>Home</Link>
        </li>
        <li>
          <Link to={`${REACT_APP_ROOT_URL}/favourites`}>Favourites</Link>
        </li>
      </ul>
    </nav>
  );
};
