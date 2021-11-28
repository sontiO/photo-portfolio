import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex p-4 md:p-12 ">
      <div className="md:w-4/6 5s:w-full flex flex-col justify-between mr-24 ">
        <div className="flex flex-row h-full w-full ">
          <div className=" h-full w-full flex flex-col font-lato font-light text-2xl -space-y-1 uppercase text-black">
            <p className="tracking-tight">Jonas</p>
            <p className="tracking-tighter">Sontheim</p>
            <div className=" w-screen pr-8 h-full md:hidden">
              <div className="mt-5 h-full w-full">
                <Image
                  width={400}
                  height={500}
                  src="https://images.unsplash.com/photo-1551576693-ddc1fee0a6aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2 h-full text-right font-cormorant text-4xl md:text-8xl uppercase hidden md:block ">
            hof
          </div>
        </div>

        <div className="flex flex-row justify-between ">
          <div className="flex-col -space-y-2 md:-space-y-5 text-black">
            <p className=" font-cormorant text-4xl md:text-8xl uppercase block md:hidden ">
              hof
            </p>
            <p className="font-cormorant text-4xl md:text-8xl uppercase">on</p>
            <p className="font-cormorant text-4xl md:text-8xl uppercase ">
              film
            </p>
          </div>
          <nav className="flex flex-row items-end mb-1 md:mb-3 space-x-3 text-black ml-10  md:mr-0 mr-4">
            <ul className="flex flex-row space-x-3">
              <li>prints</li>
              <li>about</li>
              <li>35mm</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="md:w-2/6 5s:w-full justify-center items-center bg-blue-500 m-4 hidden md:flex">
        <div className="w-10 h-10"></div>
      </div>
    </div>
  );
}
