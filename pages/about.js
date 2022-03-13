import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function About() {
  return (
    <div className="relative flex w-full h-screen p-8 md:p-12">
      <div className="flex flex-col justify-between mr-8 md:w-4/6 5s:w-full ">
        <div className="flex flex-row w-full h-full ">
          <div className="flex flex-col w-full h-full -space-y-2 text-2xl font-light text-black uppercase font-Lato">
            <div>
              <Link href="/">
                <a className="-space-y-2">
                  <p className="tracking-tight">Jonas</p>
                  <p className="tracking-tighter">Sontheim</p>
                </a>
              </Link>
              <div className="h-auto md:hidden">
                <div
                  onClick={() => setIsOpen(true)}
                  className="w-full h-auto mt-4 "
                >
                  {/* //Image here */}
                </div>
              </div>

              {/* //mobile content below, hidden tablet and up */}
              <div className="flex flex-col justify-between pr-4 mt-4 -mb-4 text-base lowercase md:hidden">
                <div className="flex flex-col mt-8 text-black ">
                  {/* //Image here */}
                </div>
                <div className="h-full py-6 mb-auto ">
                  <span className="uppercase">WIP about page</span>
                </div>

                <nav className="absolute flex flex-row items-end mr-4 -mb-2 space-x-3 text-black md:-mb-0 md:mr-0 bottom-6">
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
          </div>
        </div>

        {/* //desktop content below, hidden mobile */}
        <div className="flex-row justify-between hidden pr-4 mt-4 -mb-4 md:flex">
          <div className="flex flex-col text-3xl text-black">
            work in progress ABOUT PAGE
          </div>
        </div>
      </div>
      <div className="flex-col justify-between hidden h-full m-4 md:w-2/6 5s:w-full md:flex">
        <div className="w-full h-full overflow-x-hidden "></div>
        <nav className="flex flex-row items-end mr-4 -mb-2 space-x-3 text-black md:-mb-0 md:mr-0">
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
  );
}
