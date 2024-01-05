import React, { useEffect, useRef, useState } from "react";
import { register } from "swiper/element";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import PropType from "prop-types";

function BannerSlider({ images = [] }) {
  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);

  const photosSlider = useRef(null);
  register();

  const progressCircle = useRef(null);

  useEffect(() => {
    const photosSliderContainer = photosSlider.current;

    const paramsSlider = {
      loop: true,
      slidesPerView: 1,
      navigation: false,
      pagination: false,
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      modules: [Autoplay, EffectFade],
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.current.style.setProperty("--progress", 1 - progress);
        },
        init: function () {
          setIsSwiperInitialized(true);
        },
      },
    };

    Object.assign(photosSliderContainer, paramsSlider);
    photosSliderContainer.initialize();
  }, []);

  return (
    <>
      <swiper-container
        class="container_horizontal slider"
        ref={photosSlider}
        init="false"
      >
        {images.map((src, index) => (
          <swiper-slide
            key={index}
            class={`container_horizontal slider__slide ${
              isSwiperInitialized ? "show" : "hidden"
            }`}
          >
            <div className="container_horizontal slider__slide">
              <Image
                className="slider__image"
                src={src?.url}
                alt={"Image" + index}
                loading="lazy"
                width={816}
                height={816}
              />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      <div className="progress__container">
        <div className="progress__wrapper">
          <svg
            viewBox="0 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              className="progress__circle"
              fill="transparent"
            />
          </svg>
          <svg
            className="progress__svg"
            viewBox="0 0 48 48"
            ref={progressCircle}
          >
            <circle
              className="progress__circle circle__focus"
              cx="24"
              cy="24"
              r="20"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

BannerSlider.propTypes = {
  images: PropType.array,
};

export default BannerSlider;
