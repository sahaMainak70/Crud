import React from "react";
import "../../public/css/createUser.css";

const UpdateUser = () => {
  return (
    <div className="container">
      <div class="register-container">
        <div class="form-header">
          <h2>Update Form</h2>
        </div>
        <div className="register-form">
          <label for="id">Search Using Id:</label>
          <div className="searchBar">
            <input type="number" id="id" placeholder="Search" />
            <button>
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <form class="register-form" id="updateForm">
          <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label for="email">E-mail:</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label for="city">City:</label>
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
