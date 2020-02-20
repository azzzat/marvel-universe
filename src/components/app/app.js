import React from "react";

import "./app.css";

import Header from "../header/header.js";
import RandomCharacter from "../random-character/random-character.js";
import CharactersBoard from "../characters-board/characters-board.js";

const App = () => {
  return (
    <div>
      <Header />
      <RandomCharacter />
      <CharactersBoard />
      {/* <div>
        <div className="item-box">
          <ItemList />
        </div>
      </div> */}
    </div>
  );
};

export default App;
