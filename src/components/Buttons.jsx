// src/components/Buttons.jsx

import React from "react";
import { Link } from "react-router-dom";

function Buttons({ setResponseMessage }) {
  const handleYesClick = () => {
    const today = new Date();
    const date = today.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setResponseMessage(
      <span>
        Nuestra relación comienza el:
        <br />
        <span style={{ color: "#FF5733" }}>{date}</span>
      </span>
    );
  };

  const handleNoClick = () => {
    setResponseMessage("Vale, pero primero me tienes que resolver esto:");
  };

  return (
    <div className="buttons">
      <Link to="/respuesta">
        <button id="yesButton" onClick={handleYesClick}>
          Sí
        </button>
      </Link>

      <Link to="/norespuesta">
        <button id="noButton" onClick={handleNoClick}>
          No
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
