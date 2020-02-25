import React, { Component } from "react";

import "./character-page.css";

import Header from "../header/header.js";
import RandomCharacter from "../random-character/random-character.js";
import ApiService from "../../services/api-service.js";
import CharacterPageInfo from "./character-page-info/character-page-info.js";

class CharacterPage extends Component {
  state = {
    characterData: {
      id: null,
      name: null,
      description: null,
      comics: null,
      series: null,
      stories: null,
      image: null
    },
    loaded: false
  };

  apiService = new ApiService();

  componentDidMount() {
    this.showCharacter(this.props.characterID);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.characterID !== this.props.characterID) {
      this.showCharacter(nextProps.characterID);
    }
  }

  showCharacter = id => {
    this.apiService.getCharacter(id).then(character => {
      this.setState({
        characterData: {
          id: character.data.results[0].id,
          name: character.data.results[0].name,
          description: character.data.results[0].description,
          comics: character.data.results[0].comics.available,
          series: character.data.results[0].series.available,
          stories: character.data.results[0].stories.available,
          image:
            character.data.results[0].thumbnail.path +
            "." +
            character.data.results[0].thumbnail.extension
        },
        loaded: true
      });
    });
  };

  render() {
    const {
      characterData: { id, name, description, comics, series, stories, image },
      loaded
    } = this.state;

    const showCharacterInfo = loaded ? (
      <CharacterPageInfo
        id={id}
        name={name}
        description={description}
        comics={comics}
        series={series}
        stories={stories}
        image={image}
      />
    ) : null;

    return (
      <div>
        <Header />
        <RandomCharacter />
        {showCharacterInfo}
      </div>
    );
  }
}

export default CharacterPage;
