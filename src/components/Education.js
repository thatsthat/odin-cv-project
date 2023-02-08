import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phone: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div id="title">Education</div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="School name"
            type="text"
            id="schoolName"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            placeholder="Title of study"
            type="text"
            id="title"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            placeholder="Date of study"
            type="date"
            id="date"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div id="buttons">
            <input type="submit" value="Edit" />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
