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
  return <GalleryWrapper>content</GalleryWrapper>;
}

function GalleryWrapper({ children }) {
  return (
    <div className="relative w-screen h-screen p-8 overflow-x-hidden overflow-y-hidden md:p-12">
      <div className="text-2xl font-light text-black uppercase font-Lato">
        <Link href="/">
          <a>
            <div className="flex flex-col -space-y-1">
              <p className="tracking-tight">Jonas</p>
              <p className="tracking-tighter">Sontheim</p>
            </div>
          </a>
        </Link>
        <div className="w-full h-full ">{children}</div>
        <div>
          <Link href="/gallery/gallery2">
            <a>
              <p className="absolute bottom-8 right-36">
                01
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
