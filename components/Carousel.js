import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src="/underExposeOverDevfoma100008-instagram.jpg"
            width={1129}
            height={1153}
            priority={true}
          />
        </div>
        <div className="embla__slide">
          {" "}
          <Image
            src="/underExposeOverDevfoma100008-instagram.jpg"
            width={1129}
            height={1153}
            priority={true}
          />
        </div>
        <div className="embla__slide">
          {" "}
          <Image
            src="/underExposeOverDevfoma100008-instagram.jpg"
            width={1129}
            height={1153}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};
