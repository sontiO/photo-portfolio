import GalleryWrapper from "./../../components/GalleryWrapper";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPhotoGrid from "react-photo-grid";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export default function Gallery2() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleImageClick() {
    setModalOpen(true);
  }

  var imageData = ["/bentunnel.jpg", "/church.jpg", "/fogboat2.jpg"];
  return (
    <div>
      <Mobile>
        <div className="w-screen h-screen p-8 overflow-x-hidden overflow-y-hidden md:p-12">
          <div className="grid w-full h-full grid-cols-2 grid-rows-2 gap-8 text-2xl font-light text-black uppercase font-Lato">
            <GalleryWrapper page="02">
              {" "}
              <div className="mt-48 font-cormorant">gallerly 2 mobile tbd</div>
            </GalleryWrapper>
          </div>
        </div>
      </Mobile>
      <Desktop>
        <GalleryWrapper page="02"></GalleryWrapper>
      </Desktop>
    </div>
  );
}
