import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = ({ images, width, height, for120 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(true),
  ]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((img) => {
          return (
            <EmblaSlide
              width={width}
              height={height}
              img={img}
              for120={for120}
            />
          );
        })}
      </div>
    </div>
  );
};

function EmblaSlide({ img, width, height, for120 }) {
  return (
    <div className={for120 ? "embla__slide_120" : "embla__slide_35"}>
      <Image src={img} width={width} height={height} priority={true} />
    </div>
  );
}
