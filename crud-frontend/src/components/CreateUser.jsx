import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../public/css/createUser.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const [showMessage, setShowMessage] = useState(false);

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    axios
      .post("https://crud-backend-3urv.onrender.com/users/create", {
        name: name,
        email: email,
        city: city,
      })
      .then((res) => {
        setMessage(res.data.message || "User created successfully!");
        setMessageType("success");
        setName("");
        setEmail("");
        setCity("");
      })
      .catch((err) => {
        setMessage(err.response?.data?.message || "Failed to create user!");
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
          <h2>Create Form</h2>
        </div>
        <form className="register-form" onSubmit={handleFormSubmit}>
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
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
