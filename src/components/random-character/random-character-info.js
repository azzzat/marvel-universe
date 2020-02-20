import React from "react";

const RandomCharacterInfo = ({ character }) => {
  const { name, id, comics, series, stories, image } = character;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default RandomCharacterInfo;
