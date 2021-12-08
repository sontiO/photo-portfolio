import Image from "next/image";
import PicturePreview from "https://framer.com/m/PicturePreview-Sh2e.js@skUhXXVfzXVGPcfiCx0q";
import Modal from "../components/Modal";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex w-full h-screen p-4 md:p-12 ">
        <div className="flex flex-col justify-between mr-8 md:w-4/6 5s:w-full ">
          <div className="flex flex-row w-full h-full ">
            <div className="flex flex-col w-full h-full -space-y-1 text-2xl font-light text-black uppercase font-Lato">
              <p className="tracking-tight">Jonas</p>
              <p className="tracking-tighter">Sontheim</p>
              <div className="w-screen h-auto pr-8 md:hidden">
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
              <div className="flex flex-row justify-between pr-4 mt-4 -mb-4 text-base md:hidden">
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
                <nav className="flex flex-row items-end ml-6 mr-4 -mb-2 space-x-3 text-black md:-mb-0 md:mr-0">
                  <ul className="flex flex-row space-x-3">
                    <Link href="/gallery">
                      <a>
                        <li>gallery</li>
                      </a>
                    </Link>
                    <li>prints</li>
                    <li>about</li>
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
              <p className="text-4xl uppercase font-cormorant md:text-8xl">
                on
              </p>
              <p className="-mt-2 -mb-3 text-4xl uppercase font-cormorant md:text-8xl">
                film
              </p>
            </div>
            <nav className="flex flex-row items-end ml-6 mr-4 -mb-2 space-x-3 text-black md:-mb-0 md:mr-0">
              <ul className="flex flex-row space-x-3">
                <Link href="/gallery">
                  <a>
                    <li>gallery</li>
                  </a>
                </Link>
                <li>prints</li>
                <li>about</li>
              </ul>
            </nav>
          </div>
        </div>
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
            <h2 className="w-full my-3 text-sm text-gray-700 font-Lato">
              more from this roll:
            </h2>
            <div
              className="flex flex-row w-full gap-3 py-2 overflow-x-hidden"
              onClick={() => setIsOpen(true)}
            >
              <PicturePreview
                title="Fomapan 100"
                subtitle="more from this roll:"
                image="/bikerinpark.jpg"
              />
              <PicturePreview image="/foggysky.jpg" />
              <PicturePreview image="/sittingWben.jpg" />
              <PicturePreview image="/fogboat.jpg" />
              <PicturePreview image="/fogboat2.jpg" />
            </div>
          </div>

          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
