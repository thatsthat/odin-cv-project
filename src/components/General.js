import React, { Component } from "react";
import "../styles/General.css";

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
      viewMode: "hidden, view",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log("ieeeeep");
    //this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div id="title">General Information</div>
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
        <div className={this.state.viewMode} id="submitted">
          <div>{this.state.name}</div>
          <div>{this.state.email}</div>
          <div>{this.state.phone}</div>
          <input type="submit" value="Edit" />
        </div>
      </div>
    );
  }
}

export default General;
