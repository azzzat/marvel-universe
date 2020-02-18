import React from "react";

import "./random-character.css";

const RandomCharacter = () => {
  return (
    <div className="random-character">
      <div className="character-image"></div>
      <div>
        <h3>Персонаж</h3>
        <ul>
          <li>
            <span>Name</span>
            <span>name</span>
          </li>
          <li>
            <span>Year</span>
            <span>year</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomCharacter;
