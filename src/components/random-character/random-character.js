import React, { Component } from "react";

import "./random-character.css";

import SwapiService from "../../services/swapi-service";

class RandomCharacter extends Component {
  constructor() {
    super();
    this.updateCharacter();
  }

  state = {
    name: null,
    id: null,
    comics: null,
    series: null,
    stories: null,
    image: null
  };

  swapiService = new SwapiService();

  updateCharacter() {
    this.swapiService.getCharacter("1009610").then(character => {
      this.setState({
        name: character.data.results[0].name,
        id: character.data.results[0].id,
        comics: character.data.results[0].comics.available,
        series: character.data.results[0].series.available,
        stories: character.data.results[0].stories.available,
        image:
          character.data.results[0].thumbnail.path +
          "." +
          character.data.results[0].thumbnail.extension
      });
    });
  }

  render() {
    const { name, id, comics, series, stories, image } = this.state;

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
