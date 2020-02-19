import React, { Component } from "react";

import "./random-character.css";

import LoadingImage from "../loading-image/loading-image.js";

import ApiService from "../../services/api-service";

class RandomCharacter extends Component {
  constructor() {
    super();
    this.updateCharacter();
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

  updateCharacter() {
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
  }

  render() {
    const {
      character: { name, id, comics, series, stories, image },
      loaded
    } = this.state;

    if (!loaded) {
      return (
        <div className="random-character">
          <LoadingImage />
        </div>
      );
    }

    return (
      <div className="random-character">
        <div className="character-image">
          <img className="character-image" src={image} alt={id + "RandomImg"} />
        </div>
        <div>
          <h2>{name}</h2>
          <ul>
            <li>
              <span>ID: </span>
              <span>{id}</span>
            </li>
            <li>
              <span>Comics: </span>
              <span>{comics}</span>
            </li>
            <li>
              <span>Series: </span>
              <span>{series}</span>
            </li>
            <li>
              <span>Stories: </span>
              <span>{stories}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomCharacter;
