import GalleryWrapper from "./../../components/GalleryWrapper";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

export default function Gallery2() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleImageClick() {
    setModalOpen(true);
  }

  const photos = [
    {
      src: "/120-small/mixed120 (8).jpg",
      width: 1000,
      height: 984,
    },
    {
      src: "/120-small/mixed120 (4).jpg",
      width: 1000,
      height: 988,
    },
    {
      src: "/120-small/mixed120 (2).jpg",
      width: 1000,
      height: 984,
    },
  ];

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
        <GalleryWrapper page="02" href="/gallery/gallery3">
          <div className="h-full p-8 mb-20 ">
            <div className="w-3/4">
              <Gallery photos={photos} />
            </div>
          </div>
          <p className="max-w-xs mx-10 text-base font-lato">
            Flexaret VI - portra160 <br />
            (scan date) october 2020 <br />
            bike ride, self timer test(thats me!), view from my old room
          </p>
        </GalleryWrapper>
      </Desktop>
    </div>
  );
}
