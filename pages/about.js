import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function About() {
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      duration={7}
    >
      <div className="flex w-full h-screen md:p-12 ">
        <div className="flex flex-col justify-between w-full md:w-4/6 ">
          <div className="flex flex-row w-full h-full ">
            <div className="flex flex-col w-full h-full -space-y-2 text-2xl font-light text-black uppercase font-Lato">
              <div>
                <div className="p-8">
                  <Link href="/">
                    <a className="-space-y-2">
                      <p className="tracking-tight">Jonas</p>
                      <p className="tracking-tighter">Sontheim</p>
                    </a>
                  </Link>
                </div>
                <div className="grid w-full h-full -mt-10 scale-90 place-items-center md:hidden">
                  <Image src="/me.jpg" width={650} height={958} />
                  <p className="mt-8">Im a Frontend Developer from Munich</p>
                  <p className="mt-8 mr-10 lowercase first-letter:uppercase">
                    I created this site to document my film photography from my
                    time studying in hof. I will update it with more scans soon
                  </p>
                  <p className="mt-16 lowercase ">
                    you can reach me at js@qlax.de
                  </p>
                  <p className="mt-4 lowercase">
                    check out my dev portfolio{" "}
                    <a
                      className="border-b border-gray-400 "
                      href="https://github.com/sontiO"
                    >
                      here
                    </a>
                  </p>
                </div>

                <div className="flex flex-row justify-between pr-4 mx-8 mt-4 -mb-4 text-base md:hidden">
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
                      <li>about</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-row justify-between hidden pr-4 -mt-40 -mb-4 md:flex">
            <div className="flex flex-col text-black">
              {" "}
              <p className="mt-8 mr-10 lowercase first-letter:uppercase">
                I created this site to document my film photography from my time
                studying in hof. I will update it with more scans soon
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col justify-between hidden h-full m-4 md:w-2/6 5s:w-full md:flex ">
          <div className="w-full h-full overflow-x-hidden ">
            <div className="grid w-full h-full -mt-10 scale-90 place-items-center ">
              <Image src="/me.jpg" width={650} height={958} />
              <p className="mt-8">Im a Frontend Developer from Munich</p>
              <p className="mt-8 mr-10 lowercase first-letter:uppercase">
                I created this site to document my film photography from my time
                studying in hof. I will update it with more scans soon
              </p>
              <p className="mt-16 lowercase ">you can reach me at js@qlax.de</p>
              <p className="mt-4 lowercase">
                check out my dev portfolio{" "}
                <a
                  className="border-b border-gray-400 "
                  href="https://github.com/sontiO"
                >
                  here
                </a>
              </p>
            </div>
          </div>
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
              <li>about</li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  );
}
