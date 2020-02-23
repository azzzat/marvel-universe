import React from "react";

import "./character-page-info.css";

const CharacterPageInfo = props => {
  return (
    <div className="jumbotron body-board">
      <div className="characters-board">
        <h1 className="display-3 characters-name">{props.name}</h1>
      </div>
      <div className="characters-info">
        <img
          className="characters-image"
          src={props.image}
          alt={props.id + "img"}
        ></img>
        <ul className="text-muted list-group list-group-flush">
          <li className="list-group-item">id: {props.id}</li>
          <li className="list-group-item">Comics: {props.comics}</li>
          <li className="list-group-item">Series: {props.series}</li>
          <li className="list-group-item">Stories: {props.stories}</li>
        </ul>
      </div>
      <p className="lead characters-description">{props.description}</p>
    </div>
  );
};

export default CharacterPageInfo;
