import React from "react";
import "../../public/css/createUser.css";

const ReadUser = () => {
  return (
    <div className="container">
      <div class="register-container">
        <div class="form-header">
          <h2>Read List</h2>
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
        <div className="table">
          <table className="content-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24225</td>
                <td>Mainak Saha</td>
                <td>mainak@123gmail.com</td>
                <td>Kolkata</td>
              </tr>
              <tr>
                <td>24225</td>
                <td>Mainak Saha</td>
                <td>mainak@123adafsfsfsfafsfsffadaafaaedafaffsfsfsfssvddvdgmail.com</td>
                <td>Kolkata</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReadUser;
