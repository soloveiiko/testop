"use client";
import React, { useEffect, useRef, useState } from "react";
import { register } from "swiper/element";
import { EffectFade } from "swiper/modules";
import Image from "next/image";
import Button from "@/components/base/Button";
import { motion } from "framer-motion";
import PropType from "prop-types";

function TopManagementSlider({ items }) {

  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        /* delayChildren: 0.2, */
        staggerChildren: 0.1,
      },
    },
  };
  const childrenVariants = {
    hidden: {
      transform: "translateY(115%)",
      y: 50,
      transition: {
        delay: 0.2,
      },
    },
    visible: {
      transform: "translateY(0)",
      y: 0,
      transition: {
        ease: "circIn",
        duration: 0.5,
      },
    },
  };

  const photoSlider = useRef(null);
  const textSlider = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  register();

  const isMoreFour = items.length > 4 ? true : false;

  const handleNextClick = () => {
    /* textSlider.current.swiper.slideNext(); */
    photoSlider.current.swiper.slideNext();
  };
  const handlePrevClick = () => {
    /* textSlider.current.swiper.slidePrev(); */
    photoSlider.current.swiper.slidePrev();
  };

  const formalizeSlideIndex = () => {
    if (!isMoreFour && slideIndex > items.length - 1) {
      return slideIndex - items.length;
    } else {
      return slideIndex;
    }
  };

  useEffect(() => {
    const photoSliderContainer = photoSlider.current;
    const textSliderContainer = textSlider.current;

    const paramsPhotoSlider = {
      dir: "rtl",
      loop: true,
      navigation: false,
      pagination: false,
      observer: true,
      observeParents: true,
      setWrapperSize: true,
      slideToClickedSlide: true,
      allowTouchMove: false,
      breakpoints: {
        1441: {
          spaceBetween: "18rem",
          slidesPerView: 4,
          centeredSlides: false,
        },
        1280: {
          spaceBetween: "13rem",
          slidesPerView: 4,
          centeredSlides: false,
        },
        768: {
          spaceBetween: "13rem",
          slidesPerView: 1.66,
          centeredSlides: true,
        },
        300: {
          spaceBetween: "20rem",
          slidesPerView: 1.64,
          centeredSlides: true,
        },
      },
      on: {
        realIndexChange(s) {
          setSlideIndex(s.realIndex);
          textSliderContainer.swiper?.slideToLoop(s.realIndex);
        },
      },
    };

    const paramsTextSlider = {
      dir: "rtl",
      loop: true,
      rewind: false,
      slidesPerView: 1,
      navigation: false,
      pagination: false,
      observer: true,
      observeParents: true,
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      modules: [EffectFade],
    };

    Object.assign(photoSliderContainer, paramsPhotoSlider);
    photoSliderContainer.initialize();
    Object.assign(textSliderContainer, paramsTextSlider);
    textSliderContainer.initialize();

  }, []);

  return (
    <div className="container_horizontal topmanagement__slider">
      <div className="container_horizontal slider_photo__container">
        <swiper-container
          class="container_horizontal slider_photo"
          ref={photoSlider}
          init="false"
        >
          {(isMoreFour ? items : items.concat(items)).map((item, index) => (
            <swiper-slide
              key={index}
              class="container_horizontal slider__slide"
            >
              <div className="slider__image">
                <Image
                  src={item.photo}
                  alt={"Image" + index}
                  loading="lazy"
                  width={444}
                  height={666}
                />
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>

      <div className="container_horizontal slider_text__container">
        <div className="container_vertical slider_text__wrapper">
          <div className="container_horizontal slider__navigation">
            <Button
              onClick={handlePrevClick}
              btnProps={{
                className: "button_white button_circle-large button_prev",
              }}
              iconProps={{
                name: "arrow",
                alt: "Logo",
                width: 24,
                height: 24,
              }}
            />
            <Button
              onClick={handleNextClick}
              btnProps={{
                className: "button_white button_circle-large button_next",
              }}
              iconProps={{
                name: "arrow",
                alt: "Logo",
                width: 24,
                height: 24,
              }}
            />
          </div>
          <swiper-container
            class="container_horizontal slider_text"
            ref={textSlider}
            init="false"
          >
            {(isMoreFour ? items : items.concat(items)).map((item, index) => (
              <swiper-slide
                key={index}
                class="container_vertical slider__slide"
              >
                <motion.div
                  variants={parentVariants}
                  initial="hidden"
                  animate={slideIndex == index ? "visible" : "hidden"}
                  className="container_vertical slider__slide"
                >
                  <div className="container_animated container_animated_subtitle">
                    <motion.span
                      variants={childrenVariants}
                      className="subtitle"
                    >
                      {item.name.split(" ")[0]} <br />
                      {item.name.split(" ")[1]}
                    </motion.span>
                  </div>
                  <div className="container_animated container_animated_text">
                    <motion.span variants={childrenVariants} className="text">
                      {item.position}
                    </motion.span>
                  </div>
                </motion.div>
              </swiper-slide>
            ))}
          </swiper-container>
          {slideIndex >= 0 && (
            <span className="text slider__pagination">
              {(formalizeSlideIndex() + 1 < 10
                ? "0" + (formalizeSlideIndex() + 1)
                : formalizeSlideIndex() + 1) +
                " / " +
                (items.length < 10 ? "0" + items.length : items.length)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

TopManagementSlider.propTypes = {
  items: PropType.array,
};

export default TopManagementSlider;
