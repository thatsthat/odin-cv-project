//import React, { Component } from "react";
import React, { useState } from "react";
import styles from "../styles/Education.module.css";

const Education = () => {
  const [state, setState] = useState({
    name: "",
    title: "",
    date: "",
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
      <h1>Education</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} className={styles[state.editMode]}>
          <label>School name:</label>
          <input
            placeholder="School name"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <label>Title of study:</label>
          <input
            placeholder="Title of study"
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
          <label>Date of study:</label>
          <input
            type="date"
            name="date"
            value={state.date}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div id={styles.submitted}>
        <form className={styles[state.viewMode]} onSubmit={handleEdit}>
          <label>School name:</label>
          <div>{state.name}</div>
          <label>Title of study:</label>
          <div>{state.title}</div>
          <label>Date of study:</label>
          <div>{state.date}</div>
          <input type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
};

export default Education;
