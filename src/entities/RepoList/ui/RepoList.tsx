import { FC, ReactNode } from "react";

type Props = {
  repoList: IRepo[];
  repoCard: (props: IRepo) => ReactNode;
};

export const RepoList: FC<Props> = ({ repoList, repoCard }) => {
  return (
    <ul className={"flex flex-col gap-1 w-full"}>
      {repoList?.length === 0 && (
        <p className={"text-center"}>Repository list is empty</p>
      )}
      {repoList.map((repo) => (
        <li key={repo.id}>{repoCard(repo)}</li>
      ))}
    </ul>
  );
};
