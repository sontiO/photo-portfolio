import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "./PageTransition";

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

export default function GalleryWrapper({ children, page, href }) {
  return (
    <PageTransition>
      <motion.div
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
      >
        <div className="relative w-screen h-screen overflow-x-hidden overflow-y-hidden ">
          <div className="text-2xl font-light text-black uppercase font-Lato">
            <Link href="/">
              <a>
                <div className="flex flex-col p-8 -space-y-2 md:p-12">
                  <p className="tracking-tight">Jonas</p>
                  <p className="tracking-tighter">Sontheim</p>
                </div>
              </a>
            </Link>
            <div className="w-full h-full">{children}</div>
            <div>
              <Link href={href}>
                <a>
                  <p className="absolute bottom-8 right-5 md:right-36">
                    {page}
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
            </div>
          </div>
        </div>
      </motion.div>
    </PageTransition>
  );
}
