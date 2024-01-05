"use client";
import { useEffect, useRef } from "react";
import { register } from "swiper/element";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import PropType from "prop-types";

// const items = [
//   { id: "1", image: image1, alt: "Logo", height: "89", width: "98" },
//   { id: "2", image: image2, alt: "Logo", height: "89", width: "98" },
//   { id: "3", image: image3, alt: "Logo", height: "89", width: "98" },
//   { id: "4", image: image4, alt: "Logo", height: "89", width: "98" },
//   { id: "5", image: image1, alt: "Logo", height: "89", width: "98" },
//   { id: "6", image: image4, alt: "Logo", height: "89", width: "98" },
//   { id: "7", image: image1, alt: "Logo", height: "89", width: "98" },
//   { id: "8", image: image4, alt: "Logo", height: "89", width: "98" },
//   { id: "9", image: image1, alt: "Logo", height: "89", width: "98" },
// ];

function Partners({ info }) {
  const partners1 = info?.items.filter(
    (item, index) => index % 2 === 0 && item,
  );
  const partners2 = info?.items.filter(
    (item, index) => index % 2 === 1 && item,
  );
  const partnersTopSlider = useRef(null);
  const partnersBottomSlider = useRef(null);
  register();
  useEffect(() => {
    const partnersTopSliderContainer = partnersTopSlider.current;

    const paramsTopSlider = {
      loop: true,
      setWrapperSize: true,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
      },
      speed: 6000,
      spaceBetween: "60",
      modules: [Autoplay],
      breakpoints: {
        1441: {
          slidesPerView: 4.5,
        },
        1279: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3.5,
        },
        300: {
          slidesPerView: 2,
        },
      },
    };

    Object.assign(partnersTopSliderContainer, paramsTopSlider);
    partnersTopSliderContainer.initialize();

    const partnersBottomSliderContainer = partnersBottomSlider.current;

    const paramsBottomSlider = {
      loop: true,
      setWrapperSize: true,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      speed: 6000,
      spaceBetween: "60",
      modules: [Autoplay],
      breakpoints: {
        1441: {
          slidesPerView: 4.5,
        },
        1279: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3.5,
        },
        300: {
          slidesPerView: 2,
        },
      },
    };

    Object.assign(partnersBottomSliderContainer, paramsBottomSlider);
    partnersBottomSliderContainer.initialize();
  }, []);
  return (
    <section className="container_vertical partners">
      <div className="container_vertical partners-slider">
        <h4 className="headline partners-slider__headline">{info?.title}</h4>
        <div className="partners-slider__list">
          <swiper-container
            id="partners-slider_top"
            class="partners-slider__slider partners-slider__slider_top"
            ref={partnersTopSlider}
            init="false"
          >
            {partners1.concat(partners1).map((item, index) => (
              <swiper-slide
                key={index}
                class="container_vertical partners-slider__slide"
              >
                <div className="container_vertical partners-slider__item">
                  <div className="container_horizontal partners-slider__img-container">
                    <Image
                      className="partners-slider__image"
                      src={item?.photo}
                      alt={item?.name}
                      height={250}
                      width={150}
                    />
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
          <swiper-container
            id="partners-slider_bottom"
            class="partners-slider__slider partners-slider__slider_bottom"
            ref={partnersBottomSlider}
            init="false"
          >
            {partners2.concat(partners2).map((item, index) => (
              <swiper-slide
                key={index}
                class="container_vertical partners-slider__slide"
              >
                <div className="container_vertical partners-slider__item">
                  <div className="partners-slider__img-container">
                    <Image
                      className="partners-slider__image"
                      src={item?.photo}
                      alt={item?.name}
                      height={250}
                      width={150}
                    />
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
}

Partners.propTypes = {
  info: PropType.object,
};
export default Partners;
