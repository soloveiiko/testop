"use client";
import { Button /* ProgressCircle */ } from "@/components";
const BannerSlider = dynamic(
  () => import("@components/HomePage/Banner/BannerSlider"),
  {
    ssr: false,
  }
);
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";
import PropType from "prop-types";

function Banner({info = {}}) {
  const handleClick = () => {
    const subbanner = document.querySelector(".subbanner");
    subbanner &&
      subbanner.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section className="container_horizontal container_outer banner">
      <div className="container container_horizontal banner__container">
        <div className="container_vertical banner__slogan">
          <motion.h1
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="title container_horizontal slogan__title"
          >
            {info?.title.split(" ").map((word, index) => {
              return (
                <div key={word + "-" + index}>
                  <motion.span
                    variants={{
                      hidden: {
                        display: "block",
                        transform: "translateY(120%)",
                        y: 50,
                      },
                      visible: {
                        display: "block",
                        transform: "translateY(0)",
                        y: 0,
                        transition: {
                          ease: "circIn",
                          duration: 0.7,
                        },
                      },
                    }}
                  >
                    {word + " "}
                  </motion.span>
                </div>
              );
            })}
          </motion.h1>
          <div className="container_horizontal slogan__bottom">
            <Button
              btnProps={{
                className: "button_white button_circle-small button_down",
              }}
              iconProps={{
                name: "arrow",
                alt: "Logo",
                width: 20,
                height: 20,
              }}
              onClick={handleClick}
            />
            <span className="text bottom__text">
              {info?.desc}
            </span>
          </div>
        </div>
        <div className="container_horizontal banner__slider">
          <BannerSlider images={info?.photos} />
          {/* <ProgressCircle /> */}
        </div>
      </div>
    </section>
  );
}


Banner.propTypes = {
  info: PropType.object,
};

export default Banner;
