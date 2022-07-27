import React, { Component } from "react";
import Select from "../../components/Select";
import { getDatabase } from "../../api/services/getDatabase";
import { db } from "../../api/database/index";

import "./SelectInput.css";

export default class SelectInput extends Component {
  state = {
    focus: false,
    value: "",
  };

  componentDidMount() {
    console.log("componentDidMount", this.state.focus);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.focus);
  }

  hundleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log("value", this.state.value);
  };

  onFocus = () => {
    this.setState({ focus: true });
  };

  onBlur = () => {
    this.setState({ focus: false });
  };

  render() {
    console.log("render");

    return (
      <div className="container">
        <input
          className="input"
          type="text"
          onChange={this.hundleChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          placeholder="Введите текcт.."
        />
        <div className={this.state.focus ? "select" : "notSelect"}>
          <div onClick={(e) => e.stopPropagation()} className="list">
            {db
              .filter((person) => person.nameCompany === this.state.value)
              .map((filteredPerson) => (
                <li>{filteredPerson.nameCompany}</li>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
