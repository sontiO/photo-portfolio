import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import GalleryWrapper from "../../components/GalleryWrapper";
import { EmblaCarousel } from "../../components/Carousel";
import { motion } from "framer-motion";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: -200, y: 0 },
};

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleImageClick() {
    setModalOpen(true);
  }

  var imageData = ["/beninTrees.jpg", "/tungintrees.jpg"];
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-hidden ">
      <div className="grid w-full h-full grid-cols-2 grid-rows-2 gap-8 p-0 text-2xl font-light text-black uppercase font-Lato md:p-12">
        <Desktop>
          <Link href="/">
            <a>
              <div className="flex flex-col -space-y-2 ">
                <p className="tracking-tight">Jonas</p>
                <p className="tracking-tighter">Sontheim</p>
              </div>
            </a>
          </Link>
          <div className="">
            <Image src="/tungintrees.jpg" width={1620} height={1147} />
          </div>
          <div className="-mt-28 overflow-show">
            <Image src="/beninTrees.jpg" width={1620} height={1147} />
          </div>
          <div className="grid w-full overflow-hidden place-items-center">
            {/* //old paragraph position */}
            <p className="max-w-sm -ml-24 text-base mt-52 font-lato">
              fomapan200 developed <br /> in kodak d-76 <br />
              Shot on Minolta X-570
            </p>
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
            <div className="flex items-center justify-center h-screen p-4 -mt-24 scale-90 5s:scale-100">
              <EmblaCarousel
                images={imageData}
                width={1620}
                height={1147}
                for120={false}
              />
            </div>
          </GalleryWrapper>
        </Mobile>
      </div>
    </div>
  );
}
