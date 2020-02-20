import React from "react";

import "./characters-board.css";

import CharacterBox from "./character-box/character-box.js";
// import ApiService from "../../services/api-service.js";

const CharactersBoard = () => {
  // const apiService = new ApiService();

  // const charactersList = apiService.getCharactersList.then(data => {return data})

  // const characterData = charactersList.map((character) =>
  //   return (<CharacterBox
  //   name={character.name}
  //   id={character.id}
  //   series={character.series.available}
  //   stories={character.stories.available}
  //   comics={character.comics.available}
  //   image={character.thumbnail.path + "." + character.thumbnail.extension}/>)
  // ) )};

  return (
    <div className="jumbotron body-board">
      <div className="characters-board">
        <CharacterBox />
        <CharacterBox />
        <CharacterBox />
        <CharacterBox />
        <CharacterBox />
        <CharacterBox />
        <CharacterBox />
      </div>
    </div>
  );
};

export default CharactersBoard;
