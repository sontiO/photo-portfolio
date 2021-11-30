import Image from "next/image";
import PicturePreview from "https://framer.com/m/PicturePreview-RRrz.js@B7wzXOg2xPIuA6Xwqazp";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex w-full h-screen p-8 md:p-12 ">
        <div className="flex flex-col justify-between mr-8 md:w-4/6 5s:w-full ">
          <div className="flex flex-row w-full h-full ">
            <div className="flex flex-col w-full h-full -space-y-1 text-2xl font-light text-black uppercase font-Lato">
              <p className="tracking-tight">Jonas</p>
              <p className="tracking-tighter">Sontheim</p>
              <div className="w-screen h-full pr-8 md:hidden">
                <div className="w-full h-full my-4 ">
                  <Image width={720} height={1024} src="/kickflipMork.jpg" />
                </div>
              </div>
            </div>

            <div className="hidden w-1/2 h-full text-4xl text-right uppercase font-cormorant md:text-8xl md:block ">
              hof
            </div>
          </div>

          <div className="flex flex-row justify-between pr-4 mt-4 ">
            <div className="flex-col -space-y-2 text-black md:-space-y-5">
              <p className="block text-4xl uppercase font-cormorant md:text-8xl md:hidden">
                hof
              </p>
              <p className="text-4xl uppercase font-cormorant md:text-8xl">
                on
              </p>
              <p className="text-4xl uppercase font-cormorant md:text-8xl ">
                film
              </p>
            </div>
            <nav className="flex flex-row items-end mb-1 ml-10 mr-4 space-x-3 text-black md:mb-3 md:mr-0">
              <ul className="flex flex-row space-x-3">
                <li>prints</li>
                <li>about</li>
                <li>35mm</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex-col justify-center hidden m-4 md:w-2/6 5s:w-full md:flex">
          <div className="w-full overflow-y-hidden h-5/6">
            <Image
              src="/traintracks.png"
              width={538}
              height={846}
              layout="responsive"
              quality={100}
            />
          </div>
          <div className="flex flex-row h-1/6 " onClick={() => setIsOpen(true)}>
            <PicturePreview title="fomapan 100" subtitle="more from roll:" />
            <PicturePreview image="/kickflipMork.jpg" />
          </div>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
