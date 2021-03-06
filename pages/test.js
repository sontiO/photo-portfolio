import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPhotoGrid from "react-photo-grid";
import { useMediaQuery } from "react-responsive";
import GalleryWrapper from "../components/GalleryWrapper";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export default function Test() {
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
    <div className="grid w-screen h-screen grid-cols-2 p-8 overflow-x-hidden overflow-y-hidden text-2xl font-light text-black uppercase md:p-12 font-Lato">
      <Desktop>
        <Link href="/">
          <a>
            <div className="-space-y-2 ">
              <p className="tracking-tight">Jonas</p>
              <p className="tracking-tighter">Sontheim</p>
              <div className="items-end  overflow-show place-items-end">
                <Image src="/beninTrees.jpg" width={1620} height={1147} />
              </div>
            </div>
          </a>
        </Link>
        <div className="">
          <Image src="/tungintrees.jpg" width={1620} height={1147} />
          <p className="max-w-xs mt-10 text-base font-lato">
            fomapan200 developed in <br />
            kodak d-76. circa september 2020 <br />
            Shot on Minolta X-570
          </p>
        </div>

        <div className="overflow-hidden ">
          <Link className="visible block" href="/gallery/gallery2">
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
          <div className="absolute text-gray-500 divide-y-2 right-36 bottom-20" />
        </div>
      </Desktop>

      <Mobile>
        <GalleryWrapper page="01" href="/gallery/gallery2">
          <div className="mt-48 font-cormorant">gallerly mobile view tbd</div>
        </GalleryWrapper>
      </Mobile>
    </div>
  );
}
