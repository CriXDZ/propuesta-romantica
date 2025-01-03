// src/components/Gallery.jsx

import React from "react";
import picture1 from "../assets/img/Picture01.webp";
import picture2 from "../assets/img/Picture02.webp";
import picture3 from "../assets/img/Picture03.webp";
import picture4 from "../assets/img/Picture04.webp";

function Gallery() {
  return (
    <div id="photoGallery" className="photo-gallery">
      <h1>Para ti mi chica hermosa</h1>
      <div className="photos">
        <img src={picture1} alt="Picture 1" />
        <img src={picture2} alt="Picture 2" />
        <img src={picture3} alt="Picture 3" />
        <img src={picture4} alt="Picture 4" />
      </div>
    </div>
  );
}

export default Gallery;
