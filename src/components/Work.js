import React, { Component } from "react";
import "../styles/Work.css";

class Work extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { name: "", title: "", tasks: "", value: "" };
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
        <div id="title">Work Experience</div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Company Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Position Title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <textarea
            placeholder="Main Tasks"
            name="tasks"
            value={this.state.tasks}
            onChange={this.handleChange}
          />
          <div class="label">Work beginning date</div>
          <input
            type="date"
            name="date1"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <div class="label">Work end date</div>
          <input
            type="date"
            name="date2"
            value={this.state.date}
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

export default Work;
