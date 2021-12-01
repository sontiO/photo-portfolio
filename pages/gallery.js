import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Gallery() {
  return (
    <div>
      <div className="flex w-full h-screen p-8 md:p-12 ">
        <div className="flex flex-col justify-between md:w-4/6 5s:w-full ">
          <div className="flex flex-row w-full h-full ">
            <Link href="/">
              <a>
                <div className="flex flex-col w-full h-full -space-y-1 text-2xl font-light text-black uppercase font-Lato">
                  <p className="tracking-tight">Jonas</p>
                  <p className="tracking-tighter">Sontheim</p>
                </div>
              </a>
            </Link>
            <div className="w-full h-full ml-4 bg-red-400">content 1</div>
          </div>
          <div className="w-full h-full mt-4 bg-blue-400">content 2</div>
        </div>
        <div className="flex flex-wrap w-full h-full mx-2 ml-4 space-x-4 bg-green-500">
          <Image src="" />
        </div>

        <nav className="flex flex-row items-end mb-6 ml-6 mr-4 space-x-3 text-black md:mb-0 md:mr-0">
          <ul className="flex flex-row gap-2">
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
  );
}
