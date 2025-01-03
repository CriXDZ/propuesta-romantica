// src/components/YesResponsePage.jsx

import imglove from "../assets/img/YesResponsePage.webp";
import { Link } from "react-router-dom";
import React from "react";

function ResponsePage({ responseMessage }) {
  const handleYesClick = () => {};
  return (
    <div className="container">
      <p className="yes-message">{responseMessage}</p>
      <img src={imglove} alt="Imagen romántica" className="yes-response" />
      <Link to="/" className="back-link">
        <button className="yes-button" onClick={handleYesClick} translate="no">
          ok
        </button>
      </Link>
    </div>
  );
}

export default ResponsePage;
