import React from "react";

import "./app.css";

import Header from "../header/header.js";
import RandomCharacter from "../random-character/random-character.js";
import CharactersBoard from "../characters-board/characters-board.js";
import CharacterPage from "../character-page/character-page.js";

const App = () => {
  return (
    <div>
      <Header />
      <RandomCharacter />
      <CharacterPage />
      {/* <CharactersBoard /> */}
    </div>
  );
};

export default App;
