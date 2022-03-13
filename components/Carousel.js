import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import FullScreenModal from "./FullScreenModal";

export const EmblaCarousel = ({
  images,
  width,
  height,
  for120,
  selectedImageIndex,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay(true),
  ]);

  const [fullScreenModalOpen, setFullScreenModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(images[0]);

  const onSlideClick = useCallback(
    (index) => {
      if (emblaApi && emblaApi.clickAllowed()) {
        console.log(images[index]);
        setSelectedSlide(images[index]);
        setFullScreenModalOpen(true);
      }
    },
    [emblaApi]
  );

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {/*before mapping over our images, we slice starting
        //from selected image index, so the image preview 
        //that gets clicked on is the starting image in modal embla  */}
        {images.slice(selectedImageIndex).map((img, index) => {
          return (
            <div className="embla__slide_35">
              <EmblaSlide
                width={width}
                height={height}
                img={img}
                for120={for120}
                onClick={onSlideClick}
                index={index}
              />
              <FullScreenModal
                isOpen={fullScreenModalOpen}
                setIsOpen={setFullScreenModalOpen}
                image={selectedSlide}
                width={width}
                height={height}
              />
            </div>
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
