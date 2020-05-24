import React, { Component } from "react";

import "./characters-board.css";

import Header from "../header/header.js";
import SearchPanel from "../search-panel/search-panel.js";
import RandomCharacter from "../random-character/random-character.js";
import CharacterBox from "./character-box/character-box.js";
import PaginationBoard from "../pagination-board/pagination-board.js";
import ApiService from "../../services/api-service.js";
import { Link } from "react-router-dom";

class CharactersBoard extends Component {
  state = {
    charactersDataList: null,
    updated: false,
  };

  apiService = new ApiService();

  characterBox = (boardPage) =>
    this.apiService.getCharactersList((boardPage - 1) * 30).then((data) => {
      this.setState({ charactersDataList: data, updated: true });
    });

  componentDidMount() {
    this.characterBox(this.props.boardPage);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.boardPage !== this.props.boardPage) {
      this.characterBox(nextProps.boardPage);
    }
  }

  render() {
    const charactersCard = this.state.updated
      ? this.state.charactersDataList.map((character) => {
          return (
            <Link
              to={"/character/" + character.id}
              className="characters-link"
              key={"charKey-" + character.id}
            >
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
            </Link>
          );
        })
      : null;

    return (
      <div>
        <Header />
        <RandomCharacter />
        <SearchPanel />
        <PaginationBoard pageNumber={this.props.boardPage} />
        <div className="jumbotron body-board">
          <div className="characters-board">{charactersCard}</div>
        </div>
      </div>
    );
  }
}

export default CharactersBoard;

//сделать отдельный компонент characterCard
