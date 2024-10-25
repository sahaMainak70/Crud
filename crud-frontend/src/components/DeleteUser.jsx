import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../public/css/createUser.css";

const DeleteUser = () => {
  const [id, setId] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3500/users/read")
      .then((res) => {
        const fetchedUsers = Array.isArray(res.data)
          ? res.data
          : res.data.users;
        setUsers(fetchedUsers);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        setTimeout(() => setMessage(null), 500);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const searchHandler = () => {
    if (!id) return;
    const foundUser = users.find((person) => person._id === id);
    if (foundUser) {
      setUser(foundUser);
      setMessage("User Found Successfully");
      setMessageType("success");
    } else {
      setUser(null);
      setMessage("User Not Found");
      setMessageType("error");
    }
  };

  const deleteUser = () => {
    if (!user) return;
    axios
      .delete(`http://localhost:3500/users/delete/${user._id}`)
      .then((res) => {
        setMessage(res.data.message || "User Deleted successfully!");
        setMessageType("success");
        const updatedList = users.filter((person) => person._id !== user._id);
        setUsers(updatedList);
        setUser(null);
      })
      .catch((err) => {
        setMessage(err.response?.data?.message || "Failed to delete user!");
        setMessageType("error");
      });
  };

  return (
    <div className="container">
      {message && (
        <div
          className={`message ${messageType} ${showMessage ? "show" : "hide"}`}
        >
          {message}
        </div>
      )}
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
            <input
              type="text"
              id="id"
              placeholder="Search"
              onChange={(e) => setId(e.target.value)}
            />
            <button onClick={searchHandler}>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        {user && (
          <div className="wrapper">
            <div className="user-card">
              <h3>User Details</h3>
              <p>
                <span className="label">ID:</span> {user._id}
              </p>
              <p>
                <span className="label">Name:</span> {user.name}
              </p>
              <p>
                <span className="label">Email:</span> {user.email}
              </p>
              <p>
                <span className="label">City:</span> {user.city}
              </p>
              <button
                className="delete-btn"
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to delete this user?")
                  ) {
                    deleteUser();
                  }
                }}
              >
                Delete User
              </button>
              <p className="confirmation-text">This action cannot be undone.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteUser;
