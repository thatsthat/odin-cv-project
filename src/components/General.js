import React, { Component } from "react";
import styles from "../styles/General.module.css";

class General extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
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
        <h1>General Information</h1>
        <div className={styles.form}>
          <form
            className={styles[this.state.editMode]}
            onSubmit={this.handleSubmit}
          >
            <label>Name:</label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label className="styles.formLabel">email:</label>
            <input
              placeholder="email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label className="styles.formLabel">Phone Number:</label>
            <input
              placeholder="Phone number"
              type="text"
              name="phone"
              value={this.state.phone}
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
            <label className="styles.formLabel">Name:</label>
            <div>{this.state.name}</div>
            <label className="styles.formLabel">email:</label>
            <div>{this.state.email}</div>
            <label className="styles.formLabel">Phone Number:</label>
            <div>{this.state.phone}</div>
            <input type="submit" value="Edit" />
          </form>
        </div>
      </div>
    );
  }
}

export default General;
