import React from "react";

import "./app.css";

import CharactersBoard from "../characters-board/characters-board.js";
import CharacterPage from "../character-page/character-page.js";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <CharactersBoard boardPage="1" />} />

      <Route
        exact
        path="/:page"
        render={({ match }) => {
          const { page } = match.params;
          return <CharactersBoard boardPage={page} />;
        }}
      />

      <Route
        exact
        path="/character/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <CharacterPage characterID={id} />;
        }}
      />
    </BrowserRouter>
  );
};

export default App;
