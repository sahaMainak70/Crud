import React from 'react'
import { Link } from 'react-router-dom';
import "../../public/css/createUser.css";

const DeleteUser = () => {
  return (
    <div className="container">
      <div className="register-container">
        <div className="form-header">
          <Link to="/">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h2>Delete Form</h2>
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
      </div>
    </div>
  );
}

export default DeleteUser