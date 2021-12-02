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
    <div className="w-screen h-screen p-8 overflow-x-hidden overflow-y-hidden md:p-12">
      <div className="grid w-full h-full grid-cols-2 grid-rows-2 gap-8 text-2xl font-light text-black uppercase font-Lato">
        <Link href="/">
          <a>
            <div className="flex flex-col -space-y-1">
              <p className="tracking-tight">Jonas</p>
              <p className="tracking-tighter">Sontheim</p>
            </div>
          </a>
        </Link>

        <Desktop>
          <div className="">
            <Image src="/tungintrees.jpg" width={1620} height={1147} />
          </div>
          <div className="overflow-show ">
            {" "}
            <Image src="/beninTrees.jpg" width={1620} height={1147} />
          </div>
          <div className="overflow-hidden ">
            <p className="max-w-xs text-base mt-52 font-lato">
              fomapan200 developed in <br />
              kodak d-76. circa september 2020 <br />
              Shot on Minolta X-570
            </p>
            <Link href="/gallery/gallery2">
              <a>
                <p className="absolute right-36">
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
      </div>
    </div>
  );
}
