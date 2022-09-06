import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { FavouritesPage } from "pages/FavouritesPage";
import { Navigation } from "widgets/Navigation/ui/Navigation";
import "simplebar/dist/simplebar.min.css";
import "app/styles/simplebar.css";
import { REACT_APP_ROOT_URL } from "../shared/lib/config";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path={`${REACT_APP_ROOT_URL}`} element={<HomePage />}></Route>
        <Route
          path={`${REACT_APP_ROOT_URL}/favourites`}
          element={<FavouritesPage />}
        />
      </Routes>
    </>
  );
}

export default App;
