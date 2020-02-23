import React from "react";

import "./app.css";

import Header from "../header/header.js";
import RandomCharacter from "../random-character/random-character.js";
import CharactersBoard from "../characters-board/characters-board.js";
import CharacterPage from "../character-page/character-page.js";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <RandomCharacter />
        {/* <CharacterPage /> */}
        <Route path="/" component={CharactersBoard} />
      </div>
    </BrowserRouter>
  );
};

export default App;
