import React, { Component } from "react";

import "./random-character.css";

import LoadingImage from "../loading-image/loading-image.js";
import ApiService from "../../services/api-service";
import RandomCharacterInfo from "./random-character-info.js";

class RandomCharacter extends Component {
  componentDidMount() {
    this.updateCharacter();
    this.interval = setInterval(this.updateCharacter, 10000);
  }

  state = {
    character: {
      name: null,
      id: null,
      comics: null,
      series: null,
      stories: null,
      image: null
    },
    loaded: false
  };

  apiService = new ApiService();

  updateCharacter = () => {
    const randomNumber = Math.floor(Math.random() * 1492);

    this.apiService.getRandomCharacter(randomNumber).then(character => {
      this.setState({
        character: {
          name: character.data.results[0].name,
          id: character.data.results[0].id,
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
    const { character, loaded } = this.state;

    const showLoadingImage = !loaded ? <LoadingImage /> : null;
    const showRandomCharacter = loaded ? (
      <RandomCharacterInfo character={character} />
    ) : null;

    return (
      <div className="random-character">
        {showLoadingImage}
        {showRandomCharacter}
      </div>
    );
  }
}

export default RandomCharacter;
