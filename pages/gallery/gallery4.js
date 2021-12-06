import GalleryWrapper from "./../../components/GalleryWrapper";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPhotoGrid from "react-photo-grid";
import { useMediaQuery } from "react-responsive";
import Gallery from "react-photo-gallery";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export default function gallery3() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleImageClick() {
    setModalOpen(true);
  }

  const photos = [
    {
      src: "/120/rescan-instagram-2.jpg",
      width: 2160,
      height: 2125,
    },
    {
      src: "/120/rescan-instagram.jpg",
      width: 2160,
      height: 2125,
    },
    {
      src: "/120/stitchted-instagram.jpg",
      width: 2160,
      height: 2125,
    },
  ];

  return (
    <div>
      <Mobile>
        <div className="w-screen h-screen p-8 overflow-x-hidden overflow-y-hidden md:p-12">
          <div className="grid w-full h-full grid-cols-2 grid-rows-2 gap-8 text-2xl font-light text-black uppercase font-Lato">
            <GalleryWrapper page="04">
              {" "}
              <div className="mt-48 font-cormorant">gallerly 4 mobile tbd</div>
            </GalleryWrapper>
          </div>
        </div>
      </Mobile>
      <Desktop>
        <GalleryWrapper page="04" href="/gallery/gallery3">
          <div className="grid p-8 place-items-end">
            <div className="w-3/4">
              <Gallery photos={photos} />
            </div>
          </div>
        </GalleryWrapper>
      </Desktop>
    </div>
  );
}
