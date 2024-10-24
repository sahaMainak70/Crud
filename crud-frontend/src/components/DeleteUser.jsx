import React from 'react'
import "../../public/css/createUser.css";

const DeleteUser = () => {
  return (
    <div className="container">
      <div class="register-container">
        <div class="form-header">
          <h2>Delete Form</h2>
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
      </div>
    </div>
  );
}

export default DeleteUser