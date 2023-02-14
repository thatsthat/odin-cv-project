import React, { Component } from "react";
import "../styles/Education.module.css";

class Education extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { name: "", title: "", date: "", vale: "" };
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
        <div id="title">Education</div>
        <div className="form">
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
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <div className={this.state.viewMode} id="submitted">
          <form className={this.state.viewMode} onSubmit={this.handleEdit}>
            <div>{this.state.name}</div>
            <div>{this.state.title}</div>
            <div>{this.state.date}</div>
            <input type="submit" value="Edit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Education;
