import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((img) => {
          return <EmblaSlide img={img} />;
        })}
      </div>
    </div>
  );
};

function EmblaSlide({ img }) {
  return (
    <div className="embla__slide">
      {" "}
      <Image src={img} width={1620} height={1147} priority={true} />
    </div>
  );
}
