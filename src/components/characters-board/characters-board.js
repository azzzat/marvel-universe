import React, { Component } from "react";

import "./characters-board.css";

import Header from "../header/header.js";
import RandomCharacter from "../random-character/random-character.js";
import CharacterBox from "./character-box/character-box.js";
// import CharacterPage from "../character-page/character-page.js";
import ApiService from "../../services/api-service.js";
import { Link } from "react-router-dom";

class CharactersBoard extends Component {
  state = {
    charactersDataList: null,
    updated: false
  };

  apiService = new ApiService();

  characterBox = this.apiService.getCharactersList().then(data => {
    this.setState({ charactersDataList: data, updated: true });
  });

  render() {
    const charactersCard = this.state.updated
      ? this.state.charactersDataList.map(character => {
          // const showPerson = name => {
          //   console.log(name);
          // };

          return (
            <Link to={"/character/" + character.id} className="characters-link">
              <CharacterBox
                // click={() => console.log(character.id)}
                name={character.name}
                id={character.id}
                series={character.series.available}
                stories={character.stories.available}
                comics={character.comics.available}
                image={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
              />
            </Link>
          );
        })
      : null;

    return (
      <div>
        <Header />
        <RandomCharacter />
        <div className="jumbotron body-board">
          <div className="characters-board">{charactersCard}</div>
        </div>
      </div>
    );
  }
}

export default CharactersBoard;

//сделать отдельный компонент characterCard
