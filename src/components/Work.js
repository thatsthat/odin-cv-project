import React, { Component } from "react";
import "../styles/Work.module.css";

class Work extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { name: "", title: "", tasks: "", value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ viewMode: "", editMode: "hidden" });
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({ editMode: "", viewMode: "hidden" });
  }

  render() {
    return (
      <div>
        <div id="title">Work Experience</div>
        <div className="form">
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
            <div className="label">Work beginning date</div>
            <input
              type="date"
              name="date1"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <div className="label">Work end date</div>
            <input
              type="date"
              name="date2"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <div className="buttons">
              <input type="submit" value="Edit" />
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Work;
