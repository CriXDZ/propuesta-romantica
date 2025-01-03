// src/components/NoResponsePage.jsx

import React from "react";
import { Link } from "react-router-dom";
import picture1 from "../assets/img/NoResponsePage.webp";

function NoResponsePage({ responseMessage }) {
  const handleYesClick = () => {};

  return (
    <div className="container">
      <p className="no-message">{responseMessage}</p>
      <img src={picture1} alt="Respuesta negativa" className="no-response" />
      <Link to="/" className="back-link">
        <button className="no-button" onClick={handleYesClick} translate="no">
          OK
        </button>
      </Link>
    </div>
  );
}

export default NoResponsePage;
