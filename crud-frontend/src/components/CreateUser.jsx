import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../public/css/createUser.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post();
  };

  return (
    <div className="container">
      <div className="register-container">
        <div className="form-header">
          <Link to="/">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h2>Create Form</h2>
        </div>
        <form className="register-form" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city"
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="register-btn">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
