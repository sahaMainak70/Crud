import React from "react";
import { Link } from "react-router-dom";
import "../../public/css/createUser.css";

const UpdateUser = () => {
  return (
    <div className="container">
      <div className="register-container">
        <div className="form-header">
          <Link to="/">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h2>Update Form</h2>
        </div>
        <div className="register-form">
          <label htmlFor="id">Search Using Id:</label>
          <div className="searchBar">
            <input type="number" id="id" placeholder="Search" />
            <button>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <form className="register-form" id="updateForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" placeholder="Enter your city" />
          <div className="register-btn">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
