import React from "react";
import { Link } from "react-router-dom";
import "../../public/css/navigator.css";

const Navigator = () => {
  return (
    <div className="navigator-container">
      <Link to="/create" className="crud-item" id="item1">
        <div className="crud-box">
          <h1>C</h1>
        </div>
        <div className="crud-info">
          <p>create</p>
          <i class="fa-regular fa-circle-plus"></i>
        </div>
      </Link>
      <Link to="/read" className="crud-item" id="item2">
        <div className="crud-box">
          <h1>R</h1>
        </div>
        <div className="crud-info">
          <p>read</p>
          <i class="fa-brands fa-readme"></i>
        </div>
      </Link>
      <Link to="/update" className="crud-item" id="item3">
        <div className="crud-box">
          <h1>U</h1>
        </div>
        <div className="crud-info">
          <p>update</p>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </Link>
      <Link to="/delete" className="crud-item" id="item4">
        <div className="crud-box">
          <h1>D</h1>
        </div>
        <div className="crud-info">
          <p>delete</p>
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </Link>
    </div>
  );
};

export default Navigator;
