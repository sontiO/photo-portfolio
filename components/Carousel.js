import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = ({ images, width, height }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay(true),
  ]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((img) => {
          return <EmblaSlide width={width} height={height} img={img} />;
        })}
      </div>
    </div>
  );
};

function EmblaSlide({ img, width, height }) {
  return (
    <div className="embla__slide">
      {" "}
      <Image src={img} width={width} height={height} priority={true} />
    </div>
  );
}
