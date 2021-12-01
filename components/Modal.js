/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PicturePreview from "https://framer.com/m/PicturePreview-RRrz.js@B7wzXOg2xPIuA6Xwqazp";
import { ChevronLeftIcon } from "@heroicons/react/solid";

import Image from "next/image";
import { EmblaCarousel } from "./Carousel";

export default function Example({ isOpen, setIsOpen, image }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setIsOpen}
      >
        <div className="flex items-end justify-center min-h-screen pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform scale-90 bg-white shadow-xl sm:align-middle sm:max-w-3xl sm:w-full ">
              <div className="">
                <PictureView />
              </div>
              <div className="mt-4 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-start w-full px-8 py-2 text-base font-light text-gray-700 rounded-md font-lato focus:outline-none "
                  onClick={() => setIsOpen(false)}
                >
                  <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
                  back
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function PictureView() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-3/5">
        {/*         <Image
          src="/underExposeOverDevfoma100008-instagram.jpg"
          width={1129}
          height={1153}
          priority={true}
        /> */}
        <EmblaCarousel />
      </div>
      <div className="flex flex-row justify-between mx-10 my-4">
        <div className="flex flex-col -space-y-1 ">
          <p className="font-medium font-Lato">Fomapan 100</p>
          <div className="flex flex-col -space-y-2">
            <p className="font-light text-gray-500 font-Lato">homedev in d76</p>
            <p className="font-light text-gray-500 font-Lato">
              epson flatbed scan
            </p>
          </div>
        </div>
        <div className="flex flex-col -space-y-2 ">
          <p className="font-light text-gray-500 font-Lato">October 2020</p>
          <p className="font-medium font-Lato">Minolta X-570</p>
        </div>
      </div>
    </div>
  );
}
