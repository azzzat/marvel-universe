import React, { Component } from "react";

import "./search-panel.css";
import ApiService from "../../services/api-service.js";

export default class SearchPanel extends Component {
  render() {
    return (
      <div className="form-group search-panel">
        <fieldset disabled="">
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Character`s name"
            disabled=""
          ></input>
        </fieldset>
      </div>
    );
  }
}
