"use client";
import React, { useEffect, useRef, useState } from "react";
import { register } from "swiper/element";
import Image from "next/image";
import Button from "@components/base/Button";

export default function ProductImgSlider({ images, title }) {
  const productImgSlider = useRef();
  const [slideIndex, setSlideIndex] = useState();

  register();

  const handleNextClick = () => {
    productImgSlider.current?.swiper.slideNext();
  };
  const handlePrevClick = () => {
    productImgSlider.current?.swiper.slidePrev();
  };

  useEffect(() => {
    const productImgSliderContainer = productImgSlider.current;

    const paramsSlider = {
      loop: true,
      slidesPerView: 1,
      pagination: false,
      observer: true,
      observeParents: true,
      on: {
        activeIndexChange(s) {
          const index = productImgSliderContainer.swiper?.realIndex + 1;
          setSlideIndex(index < 10 ? "0" + index : index);
        },
      },
    };

    Object.assign(productImgSliderContainer, paramsSlider);
    productImgSliderContainer.initialize();
  }, []);

  return (
    <div
      className={`product-slider${
        images.length > 1 ? " product-slider_pagination" : ""
      }`}
    >
      <swiper-container ref={productImgSlider} init="false">
        {images.map((el, index) => (
          <swiper-slide
            key={index}
            className="container_horizontal product-slider__slide"
          >
            <div className="container_horizontal product-slider__img-container">
              <Image
                className="product-slider__image"
                src={el.url}
                alt={title}
                loading="lazy"
                width="928"
                height="610"
              />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      {images.length > 1 && (
        <>
          <div className="button__container product-next-arrow">
            <Button
              btnProps={{
                className: "button_yellow button_circle-large button_next",
              }}
              iconProps={{
                name: "arrow",
                alt: "Logo",
                width: 24,
                height: 24,
              }}
              onClick={handleNextClick}
            />
          </div>
          <div className="button__container product-prev-arrow">
            <Button
              btnProps={{
                className: "button_yellow button_circle-large button_prev",
              }}
              iconProps={{
                name: "arrow",
                alt: "Logo",
                width: 24,
                height: 24,
              }}
              onClick={handlePrevClick}
            />
          </div>
        </>
      )}
      {slideIndex && images.length > 1 && (
        <span className="text product-slider__pagination">
          {slideIndex +
            " / " +
            (images.length < 10 ? "0" + images.length : images.length)}
        </span>
      )}
    </div>
  );
}
