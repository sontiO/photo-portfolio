import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = ({ images, width, height, for120 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay(true),
  ]);

  const onSlideClick = useCallback(
    (index) => {
      if (emblaApi && emblaApi.clickAllowed()) {
        console.log(images[index]);
      }
    },
    [emblaApi]
  );

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((img, index) => {
          return (
            <EmblaSlide
              width={width}
              height={height}
              img={img}
              for120={for120}
              onClick={onSlideClick}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

function EmblaSlide({ img, width, height, for120, index, onClick }) {
  return (
    <div className={for120 ? "embla__slide_120" : "embla__slide_35"}>
      <Image
        src={img}
        width={width}
        height={height}
        priority={true}
        onClick={() => onClick(index)}
      />
    </div>
  );
}
