import React, { Component } from "react";
import styles from "../styles/Work.module.css";

class Work extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      tasks: "",
      date1: "",
      date2: "",
      value: "",
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
        <h1>Work Experience</h1>
        <div className={styles.form}>
          <form
            onSubmit={this.handleSubmit}
            className={styles[this.state.editMode]}
          >
            <input
              placeholder="Company name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              placeholder="Position title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <textarea
              placeholder="Main tasks"
              name="tasks"
              value={this.state.tasks}
              onChange={this.handleChange}
            />
            <label>Work beginning date:</label>
            <input
              type="date"
              name="date1"
              value={this.state.date1}
              onChange={this.handleChange}
            />
            <label>Work end date:</label>
            <input
              type="date"
              name="date2"
              value={this.state.date2}
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
            <label>Company name:</label>
            <div>{this.state.name}</div>
            <label>Position title:</label>
            <div>{this.state.title}</div>
            <label>Main tasks:</label>
            <div>{this.state.tasks}</div>
            <label>Work beginning date:</label>
            <div>{this.state.date1}</div>
            <label>Work end date:</label>
            <div>{this.state.date2}</div>
            <input type="submit" value="Edit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Work;
