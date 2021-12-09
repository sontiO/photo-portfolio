import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "./PageTransition";

export default function GalleryWrapper({ children, page, href }) {
  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.61, 1, 0.88, 1],
          },
        }}
      >
        <div className="relative w-screen h-screen overflow-x-hidden overflow-y-hidden ">
          <div className="text-2xl font-light text-black uppercase font-Lato">
            <Link href="/">
              <a>
                <div className="flex flex-col -space-y-2 md:p-12">
                  <p className="tracking-tight">Jonas</p>
                  <p className="tracking-tighter">Sontheim</p>
                </div>
              </a>
            </Link>
            <div className="w-full h-full">{children}</div>
            <div>
              <Link href={href}>
                <a>
                  <p className="absolute bottom-8 right-36">
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
