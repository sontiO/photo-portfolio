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
          {" "}
          <Image
            src="/bikerinpark.jpg"
            width={1620}
            height={1147}
            priority={true}
          />
        </div>
        <div className="embla__slide">
          {" "}
          <Image
            src="/foggysky.jpg"
            width={1620}
            height={1147}
            priority={true}
          />
        </div>

        <div className="embla__slide">
          <Image
            src="/sittingWben.jpg"
            width={1620}
            height={1147}
            priority={true}
          />
        </div>
        <div className="embla__slide">
          {" "}
          <Image src="/homies.jpg" width={1620} height={1147} priority={true} />
        </div>
        <div className="embla__slide">
          {" "}
          <Image
            src="/fogboat.jpg"
            width={1620}
            height={1147}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};
