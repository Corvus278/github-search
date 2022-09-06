import { FC } from "react";
import { SearchInput } from "entities/SearchInput/ui/SearchInput";
import { Spinner } from "shared/ui/Spinner";
import { RepoList } from "entities/RepoList/ui/RepoList";
import { RepoCard } from "entities/RepoCard/ui/RepoCard";
import { searchModel } from "entities/SearchInput";

type Props = {};

export const SearchRepos: FC<Props> = (props) => {
  const [
    fetchUserRepos,
    { data: repoData, isLoading: repoIsLoading, isError: repoIsError },
  ] = searchModel.useLazyGetUserReposQuery();

  return (
    <div className={"w-full"}>
      <SearchInput onSubmit={fetchUserRepos}></SearchInput>

      <div className={"container"}>
        {repoIsLoading ? (
          <div className={"flex justify-center"}>
            <Spinner></Spinner>
          </div>
        ) : repoIsError ? (
          <h1 className={"text-center text-red-600"}>
            Something went wrong...
          </h1>
        ) : (
          repoData && (
            <RepoList
              repoList={repoData}
              repoCard={(repo) => <RepoCard repo={repo} />}
            ></RepoList>
          )
        )}
      </div>
    </div>
  );
};
