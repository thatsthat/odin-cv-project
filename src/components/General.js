import React, { Component } from "react";
import "../styles/General.css";

class General extends Component {
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
        <div id="title">General Information</div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            id="name"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            id="email"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            placeholder="Phone number"
            type="text"
            id="phone"
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

export default General;
