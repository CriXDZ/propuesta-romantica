// src/components/Music.jsx

import React, { useState, useRef, useEffect } from "react";
import musicFile from "../assets/audio/audio.opus";

function Music() {
  const [isMuted, setIsMuted] = useState(true); // Comienza con el audio muteado
  const audioRef = useRef(null); // Para controlar el audio

  // Cambia el estado de mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted; // Cambia el estado de mute

      if (isMuted) {
        audioRef.current.play(); // Reanuda la música si se desmutea
      } else {
        audioRef.current.pause(); // Pausa la música si se mutea
      }
    }
  };

  // Asegúrate de que el audio no se reproduzca automáticamente
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Ajusta el volumen por defecto
      if (!isMuted) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay bloqueado por el navegador:", error);
        });
      }
    }
  }, [isMuted]); // Vuelve a ejecutar cada vez que cambie isMuted

  return (
    <div className="music-container">
      <audio ref={audioRef} src={musicFile} loop />
      <button id="muteButton" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}

export default Music;
