import React from "react";

import "./app.css";

import Header from "../header/header.js";
import RandomCharacter from "../random-character/random-character.js";
import ItemList from "../item-list/item-list.js";

const App = () => {
  return (
    <div>
      <Header />
      <RandomCharacter />
      <div>
        <div className="item-box">
          <ItemList />
        </div>
      </div>
    </div>
  );
};

export default App;
