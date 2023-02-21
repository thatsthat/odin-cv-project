//import React, { Component } from "react";
import React, { useState } from "react";
import styles from "../styles/General.module.css";

const General = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    editMode: "",
    viewMode: "hidden",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      viewMode: "",
      editMode: "hidden",
    }));
  };

  const handleEdit = (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      viewMode: "hidden",
      editMode: "",
    }));
  };

  return (
    <div>
      <h1>General Information</h1>
      <div className={styles.form}>
        <form className={styles[state.editMode]} onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <label className="styles.formLabel">email:</label>
          <input
            placeholder="email"
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <label className="styles.formLabel">Phone Number:</label>
          <input
            placeholder="Phone number"
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div id={styles.submitted}>
        <form className={styles[state.viewMode]} onSubmit={handleEdit}>
          <label className="styles.formLabel">Name:</label>
          <div>{state.name}</div>
          <label className="styles.formLabel">email:</label>
          <div>{state.email}</div>
          <label className="styles.formLabel">Phone Number:</label>
          <div>{state.phone}</div>
          <input type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
};

export default General;
