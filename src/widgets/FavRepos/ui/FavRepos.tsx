import { FC } from "react";
import { RepoCard } from "entities/RepoCard";
import { useAppSelector } from "shared/lib/redux/useAppSelector";
import { githubModel } from "entities/RepoCard";

type Props = {};

export const FavRepos: FC<Props> = (props) => {
  const favourites = useAppSelector(githubModel.selectors.favourites);

  return (
    <div className={"w-full"}>
      {favourites.length === 0 ? (
        <h1 className={"text-lg"}>Favourites list is empty</h1>
      ) : (
        <ul className={"w-full"}>
          {favourites.map((item) => (
            <li key={item.id}>
              <RepoCard repo={item}></RepoCard>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
