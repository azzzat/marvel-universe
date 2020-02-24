import React from "react";

import "./character-box.css";

const CharacterBox = props => {
  return (
    <div
      className="card mb-3 character-box"
      id={props.id}
      // onClick={props.click}
    >
      <h3 className="card-header character-name">{props.name}</h3>
      <img
        className="box-image box-character-image"
        src={props.image}
        alt={props.id + "img"}
      ></img>
      <div className="card-body box-info">
        <ul className="list-group list-group-flush box-info-ul ">
          <li className="list-group-item box-info-li">ID: {props.id}</li>
          <li className="list-group-item box-info-li">
            Comics: {props.comics}
          </li>
          <li className="list-group-item box-info-li">Series {props.series}</li>
          <li className="list-group-item box-info-li">
            Stories {props.stories}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterBox;
