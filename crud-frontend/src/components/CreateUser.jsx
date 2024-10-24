import React from "react";
import { Link } from "react-router-dom";
import "../../public/css/createUser.css";

const CreateUser = () => {
  return (
    <div className="container">
      <div className="register-container">
        <div className="form-header">
          <Link to="/">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h2>Create Form</h2>
        </div>
        <form className="register-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" placeholder="Enter your city" />
          <div className="register-btn">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
