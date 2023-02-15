import React, { Component } from "react";
import styles from "../styles/Education.module.css";

class Education extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      date: "",
      vale: "",
      editMode: "",
      viewMode: "hidden",
    };
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
        <h1>Education</h1>
        <div className={styles.form}>
          <form
            onSubmit={this.handleSubmit}
            className={styles[this.state.editMode]}
          >
            <label>School name:</label>
            <input
              placeholder="School name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label>Title of study:</label>
            <input
              placeholder="Title of study"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label>Date of study:</label>
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id={styles.submitted}>
          <form
            className={styles[this.state.viewMode]}
            onSubmit={this.handleEdit}
          >
            <label>School name:</label>
            <div>{this.state.name}</div>
            <label>Title of study:</label>
            <div>{this.state.title}</div>
            <label>Date of study:</label>
            <div>{this.state.date}</div>
            <input type="submit" value="Edit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Education;
