import React from "react";
import GalleryLayout from "./layout";

function Gallery() {
  const galleryData = require('/public/data/gallery.json');
  return (
    <GalleryLayout
      {...galleryData}
    />
  );
}

export default Gallery;
