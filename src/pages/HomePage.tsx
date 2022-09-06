import { FC } from "react";
import { Layout } from "../shared/ui/Layout";
import { SearchRepos } from "widgets/SearchRepos";

type Props = {};

export const HomePage: FC<Props> = (props) => {
  return (
    <Layout>
      <SearchRepos></SearchRepos>
    </Layout>
  );
};
