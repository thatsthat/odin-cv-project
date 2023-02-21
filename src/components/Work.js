//import React, { Component } from "react";
import React, { useState } from "react";
import styles from "../styles/Work.module.css";

const Work = () => {
  const [state, setState] = useState({
    name: "",
    title: "",
    tasks: "",
    date1: "",
    date2: "",
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
      <h1>Work Experience</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} className={styles[state.editMode]}>
          <input
            placeholder="Company name"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <input
            placeholder="Position title"
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
          <textarea
            placeholder="Main tasks"
            name="tasks"
            value={state.tasks}
            onChange={handleChange}
          />
          <label>Work beginning date:</label>
          <input
            type="date"
            name="date1"
            value={state.date1}
            onChange={handleChange}
          />
          <label>Work end date:</label>
          <input
            type="date"
            name="date2"
            value={state.date2}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div id={styles.submitted}>
        <form className={styles[state.viewMode]} onSubmit={handleEdit}>
          <label>Company name:</label>
          <div>{state.name}</div>
          <label>Position title:</label>
          <div>{state.title}</div>
          <label>Main tasks:</label>
          <div>{state.tasks}</div>
          <label>Work beginning date:</label>
          <div>{state.date1}</div>
          <label>Work end date:</label>
          <div>{state.date2}</div>
          <input type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
};

export default Work;
