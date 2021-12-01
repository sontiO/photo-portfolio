import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPhotoGrid from "react-photo-grid";

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleImageClick() {
    setModalOpen(true);
  }

  var imageData = [
    "/bentunnel.jpg",
    "/boatnebel.jpg",
    "/underExposeOverDevfoma100008-instagram.jpg",
  ];
  return (
    <div className="w-full h-full">
      <ReactPhotoGrid
        data={imageData}
        gridSize="1000x2000"
        onImageClick={() => handleImageClick()}
      />
    </div>
  );
}
