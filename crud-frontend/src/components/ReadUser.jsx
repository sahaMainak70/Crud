import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../public/css/createUser.css";

const ReadUser = () => {
  const [id, setId] = useState("");
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/users/read")
      .then((res) => {
        const fetchedUsers = Array.isArray(res.data)
          ? res.data
          : res.data.users;
        setUsers(fetchedUsers);
        setAllUsers(fetchedUsers);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const searchHandler = () => {
      if (id) {
        const filteredUsers = allUsers.filter((user) =>
          user._id.toString().includes(id)
        );
        setUsers(filteredUsers);
      } else {
        setUsers(allUsers);
      }
    };
    searchHandler();
  }, [id, allUsers]);

  return (
    <div className="container">
      <div className="register-container">
        <div className="form-header">
          <Link to="/">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h2>Read List</h2>
        </div>
        <div className="register-form">
          <label htmlFor="id">Search Using Id:</label>
          <div className="searchBar">
            <input
              type="text"
              id="id"
              placeholder="Search"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
            <button onClick={() => setId(id)}>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
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
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReadUser;
