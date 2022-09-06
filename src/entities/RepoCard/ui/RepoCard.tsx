import { FC, MouseEvent, useState } from "react";
import { useAppSelector } from "shared/lib/redux/useAppSelector";
import { githubActions, selectors } from "../model/github.slice";
import { useDispatch } from "react-redux";
import styles from "./repocard.module.css";
// import { githubModel } from "entities/RepoCard";

type Props = {
  repo: IRepo;
};

export const RepoCard: FC<Props> = ({ repo }) => {
  const dispatch = useDispatch();
  const { addFavourite, removeFavourites } = githubActions;
  const favourites = useAppSelector(selectors.favourites);
  const [isFavourite, setIsFavourite] = useState(favourites.includes(repo));

  const addToFavourite = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    dispatch(addFavourite(repo));
    setIsFavourite(true);
  };

  const removeFromFavourite = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    dispatch(removeFavourites(repo));
    setIsFavourite(false);
  };

  return (
    <div className={styles.repoCard}>
      <h2 className={"text-lg font-bold"}>
        <a
          className={
            "after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0"
          }
          href={repo.html_url}
          target={"_blank"}
          rel={"noreferrer"}
        >
          {repo.full_name}
        </a>
      </h2>
      <p className={"text-sm"}>
        Forks: <span className={"font-bold mr-2"}>{repo.forks}</span>
        Watchers: <span className={"font-bold"}>{repo.forks}</span>
      </p>
      {repo.description && (
        <p className={"text-sm font-thin"}>{repo.description}</p>
      )}

      {!isFavourite ? (
        <button
          className={
            "relative py-2 px-4 bg-primary rounded text-white hover:bg-secondary transition-colors"
          }
          onClick={addToFavourite}
        >
          Add to favourite
        </button>
      ) : (
        <button
          className={
            "relative py-2 px-4 bg-red-400 rounded hover:shadow-md transition-shadow text-white"
          }
          onClick={removeFromFavourite}
        >
          Remove from favourite
        </button>
      )}
    </div>
  );
};
