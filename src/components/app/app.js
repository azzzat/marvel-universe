import React from "react";

import "./app.css";

import CharactersBoard from "../characters-board/characters-board.js";
import CharacterPage from "../character-page/character-page.js";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={CharactersBoard} exact />
      <Route
        path="/character/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <CharacterPage characterID={id} exact />;
        }}
      />
    </BrowserRouter>
  );
};

export default App;
