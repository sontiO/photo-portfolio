import GalleryWrapper from "./../../components/GalleryWrapper";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPhotoGrid from "react-photo-grid";
import { useMediaQuery } from "react-responsive";
import Gallery from "react-photo-gallery";
import { EmblaCarousel } from "../../components/Carousel";

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

  const imageData = [
    {
      src: "/120-small/mixed120 (5).jpg",
      width: 1000,
      height: 1002,
    },

    {
      src: "/120-small/mixed120 (14).jpg",
      width: 1000,
      height: 990,
    },
    {
      src: "/120-small/mixed120 (11).jpg",
      width: 1000,
      height: 993,
    },
  ];

  return (
    <div>
      <Mobile>
        <div className="h-screen overflow-y-hidden">
          <div className="grid w-full h-full ">
            <GalleryWrapper page="03" href="/">
              <div className="flex items-center justify-center h-screen p-4 -mt-24">
                <EmblaCarousel
                  images={imageData}
                  width={1000}
                  height={1000}
                  for120={true}
                />
              </div>
            </GalleryWrapper>
          </div>
        </div>
      </Mobile>
      <Desktop>
        <GalleryWrapper page="03" href="/">
          <div className="grid p-8 place-items-end">
            <div className="w-3/4">
              <Gallery photos={imageData} />
              <p className="max-w-xs mt-10 text-base text-left font-lato">
                Flexaret VI - portra160 <br />
                foggy morning, boat rental, summer evening - at untreusee
              </p>
            </div>
          </div>
        </GalleryWrapper>
      </Desktop>
    </div>
  );
}
