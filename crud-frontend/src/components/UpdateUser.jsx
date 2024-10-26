import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../public/css/createUser.css";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    axios
      .get("https://crud-backend-3urv.onrender.com/users/read")
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

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name must contain only letters and spaces";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const searchHandler = () => {
    if (!id) return;
    const foundUser = users.find((person) => person._id === id);
    if (foundUser) {
      setUser(foundUser);
      setName(foundUser.name);
      setEmail(foundUser.email);
      setCity(foundUser.city);
      setErrors({});
      setMessage("User Found Successfully");
      setMessageType("success");
    } else {
      setUser(null);
      setName("");
      setEmail("");
      setCity("");
      setMessage("User Not Found");
      setMessageType("error");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    axios
      .put("https://crud-backend-3urv.onrender.com/users/update", {
        id: user._id,
        name: name,
        email: email,
        city: city,
      })
      .then((res) => {
        setMessage(res.data.message || "User updated successfully!");
        setMessageType("success");

        setUsers((prevUsers) =>
          prevUsers.map((u) =>
            u._id === user._id ? { ...u, name, email, city } : u
          )
        );
        setUser(null);
        setName("");
        setEmail("");
        setCity("");
      })
      .catch((err) => {
        setMessage(err.response?.data?.message || "Failed to update user!");
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
          <h2>Update Form</h2>
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
          <form
            className="register-form"
            id="updateForm"
            onSubmit={handleFormSubmit}
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            {errors.city && <p className="error">{errors.city}</p>}
            <div className="register-btn">
              <button type="submit">Update</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateUser;
