import { FC } from "react";
import { Layout } from "shared/ui/Layout";
import { FavRepos } from "../widgets/FavRepos";

type Props = {};

export const FavouritesPage: FC<Props> = (props) => {
  return (
    <Layout>
      <FavRepos></FavRepos>
    </Layout>
  );
};
