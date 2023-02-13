import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { name: "", title: "", date: "", vale: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div id="title">Education</div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="School name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Title of study"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <div className="label">Date of study</div>
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <div className="buttons">
            <input type="submit" value="Edit" />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
