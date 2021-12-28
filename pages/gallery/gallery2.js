import GalleryWrapper from "./../../components/GalleryWrapper";
import Link from "next/link";
import { useState, useEffect } from "react";
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

export default function Gallery2() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleImageClick() {
    setModalOpen(true);
  }

  const imageData = [
    {
      src: "/120-small/mixed120 (8).jpg",
      thumbnail: "/120-small/mixed120 (8).jpg",
      width: 1000,
      height: 984,
      thumbnailWidth: 1000,
      thumbnailHeight: 984,
    },
    {
      src: "/120-small/mixed120 (4).jpg",
      thumbnail: "/120-small/mixed120 (8).jpg",
      width: 1000,
      height: 988,
      thumbnailWidth: 1000,
      thumbnailHeight: 988,
    },
    {
      src: "/120-small/mixed120 (2).jpg",
      thumbnail: "/120-small/mixed120 (8).jpg",
      width: 1000,
      height: 984,
      thumbnailWidth: 1000,
      thumbnailHeight: 984,
    },
  ];

  return (
    <div>
      <Mobile>
        <div className="h-screen overflow-y-hidden">
          <div className="grid w-full h-full ">
            <GalleryWrapper page="02" href="/gallery/gallery3" for120={true}>
              <div className="flex items-center justify-center h-screen p-4 -mt-24">
                <EmblaCarousel
                  images={imageData}
                  width={1000}
                  height={988}
                  for120={true}
                />
              </div>
            </GalleryWrapper>
          </div>
        </div>
      </Mobile>
      <Desktop>
        <GalleryWrapper page="02" href="/gallery/gallery3">
          <div className="h-full p-8 ">
            <div className="w-3/4">
              <Gallery photos={imageData} />
            </div>
          </div>
          <p className="max-w-xs mx-10 text-base font-lato">
            Flexaret VI - portra160 <br />
            (scan date) october 2020 <br />
          </p>
        </GalleryWrapper>
      </Desktop>
    </div>
  );
}
