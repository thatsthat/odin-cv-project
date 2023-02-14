import React, { Component } from "react";
import "../styles/General.module.css";

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
        <div id="title">General Information</div>
        <div className="form">
          <form className={this.state.editMode} onSubmit={this.handleSubmit}>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              placeholder="email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
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
        <div className={this.state.viewMode} id="submitted">
          <form className={this.state.viewMode} onSubmit={this.handleEdit}>
            <div>{this.state.name}</div>
            <div>{this.state.email}</div>
            <div>{this.state.phone}</div>
            <input type="submit" value="Edit" />
          </form>
        </div>
      </div>
    );
  }
}

export default General;
