import React from "react";
import "../../public/css/createUser.css";

const CreateUser = () => {
  return (
    <div className="container">
      <div class="register-container">
        <div class="form-header">
          <h2>Create Form</h2>
        </div>
        <form class="register-form">
          <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label for="email">E-mail:</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label for="city">City:</label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city"
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
