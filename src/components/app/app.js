import React from "react";

import "./app.css";

import CharactersBoard from "../characters-board/characters-board.js";
import CharacterPage from "../character-page/character-page.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
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

        <Route
          exact
          path="/"
          render={() => <CharactersBoard boardPage="1" />}
        />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
