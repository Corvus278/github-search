import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { FavouritesPage } from "pages/FavouritesPage";
import { Navigation } from "widgets/Navigation/ui/Navigation";
import "simplebar/dist/simplebar.min.css";
import "app/styles/simplebar.css";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/favourites"} element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;
