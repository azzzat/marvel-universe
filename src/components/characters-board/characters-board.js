import React, { Component } from "react";

import "./characters-board.css";

import CharacterBox from "./character-box/character-box.js";
import ApiService from "../../services/api-service.js";

class CharactersBoard extends Component {
  state = {
    charactersDataList: null,
    updated: false
  };

  apiService = new ApiService();

  characterBox = this.apiService.getCharactersList().then(data => {
    this.setState({ charactersDataList: data, updated: true });
    console.log(this.state);
  });

  // charactersCard = this.state.charactersDataList.map(character => {
  //   return (
  //     <CharacterBox
  //       name={character.name}
  //       id={character.id}
  //       series={character.series.available}
  //       stories={character.stories.available}
  //       comics={character.comics.available}
  //       image={character.thumbnail.path + "." + character.thumbnail.extension}
  //     />
  //   );
  // });

  render() {
    const charactersCard = this.state.updated
      ? this.state.charactersDataList.map(character => {
          return (
            <CharacterBox
              name={character.name}
              id={character.id}
              series={character.series.available}
              stories={character.stories.available}
              comics={character.comics.available}
              image={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
            />
          );
        })
      : null;

    return (
      <div className="jumbotron body-board">
        <div className="characters-board">{charactersCard}</div>
      </div>
    );
  }
}

export default CharactersBoard;

//отображение настроить
