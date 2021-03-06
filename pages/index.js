import Image from "next/image";
import PicturePreview from "https://framer.com/m/PicturePreview-Sh2e.js@skUhXXVfzXVGPcfiCx0q";
import Modal from "../components/Modal";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
}; */

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const images = [
  "/bikerinpark.jpg",
  "/foggysky.jpg",
  "/sittingWben.jpg",
  "/fogboat.jpg",
  "/fogboat2.jpg",
];

export default function Home() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function openGalleryModal(index) {
    setSelectedImageIndex(index);
    setIsOpen(true);
  }

  return (
    <div className="flex w-full h-screen p-4 md:p-12">
      <div className="flex flex-col justify-between md:w-4/6 5s:w-full ">
        <div className="flex flex-row w-full h-full ">
          <div className="flex flex-col w-full h-full -space-y-2 text-2xl font-light text-black uppercase font-Lato">
            <Link href="/">
              <a className="-space-y-2">
                <p className="tracking-tight">Jonas</p>
                <p className="tracking-tighter">Sontheim</p>
              </a>
            </Link>
            <div className="w-full h-auto md:hidden">
              <div
                onClick={() => setIsOpen(true)}
                className="w-full h-auto mt-4 "
              >
                <Image
                  width={724}
                  height={924}
                  src="/contactcombinedSmall.jpg"
                  priority
                />
              </div>
            </div>
            <div className="justify-between mt-4 -mb-4 md:hidden">
              <div className="flex flex-col mt-8 text-black ">
                <p className="-mb-2 text-4xl uppercase font-cormorant md:text-8xl md:hidden">
                  hof
                </p>
                <p className="text-4xl uppercase font-cormorant md:text-8xl">
                  on
                </p>
                <p className="-mt-2 -mb-3 text-4xl uppercase font-cormorant md:text-8xl">
                  film
                </p>
              </div>
              <nav className="flex flex-row w-full mt-6 mb-6 text-base lowercase sm:mt-24">
                <ul className="flex flex-row space-x-3">
                  <Link href="/gallery">
                    <a>
                      <li>gallery</li>
                    </a>
                  </Link>
                  <Link href="/prints">
                    <a>
                      <li>prints</li>
                    </a>
                  </Link>
                  <Link href="/about">
                    <a>
                      <li>about</li>
                    </a>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>

          <div className="hidden w-1/2 h-full text-4xl text-right uppercase font-cormorant md:text-8xl md:block ">
            hof
          </div>
        </div>

        <div className="flex-row justify-between hidden pr-4 mt-4 -mb-4 md:flex">
          <div className="flex flex-col text-black ">
            <p className="-mb-2 text-4xl uppercase font-cormorant md:text-8xl md:hidden">
              hof
            </p>
            <p className="text-4xl uppercase font-cormorant md:text-8xl">on</p>
            <p className="-mt-2 -mb-3 text-4xl uppercase font-cormorant md:text-8xl">
              film
            </p>
          </div>
          <nav className="flex flex-row items-end ml-6 mr-4 space-x-3 text-black md:mb-0.5 md:mr-0">
            <ul className="flex flex-row space-x-3">
              <Link href="/gallery">
                <a>
                  <li>gallery</li>
                </a>
              </Link>
              <Link href="/prints">
                <a>
                  <li>prints</li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li>about</li>
                </a>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      {/* //desktop */}
      <div className="flex-col justify-between hidden h-full m-4 md:w-2/6 5s:w-full md:flex">
        <div className="w-full overflow-x-hidden overflow-y-hidden ">
          <Image
            width={724}
            height={924}
            src="/contactcombinedSmall.jpg"
            priority
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row w-full gap-3 py-2 overflow-x-hidden ">
            {images.map((image, index) => {
              return (
                <div onClick={() => openGalleryModal(index)}>
                  <PicturePreview image={image} />
                </div>
              );
            })}
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedImageIndex={selectedImageIndex}
          images={images}
        />
      </div>
    </div>
  );
}
