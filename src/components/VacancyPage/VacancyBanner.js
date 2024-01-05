"use client";
import Image from "next/image";
import React from "react";
import image from "@public/images/vacancyPage/vacancyBanner.webp";
import { motion } from "framer-motion";
import PropType from "prop-types";

function VacancyBanner({ vacancyInfo = {} }) {
  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const childrenVariants = {
    hidden: {
      transform: "translateY(120%)",
      y: 50,
    },
    visible: {
      transform: "translateY(0)",
      y: 0,
      transition: {
        ease: "circIn",
        duration: 0.7,
      },
    },
  };
  return (
    <section className="container_vertical vacancy-banner">
      <div className="container_vertical vacancy-banner__container">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="container_horizontal vacancy-banner__content"
        >
          <motion.h2
            variants={childrenVariants}
            className="subtitle vacancy-banner__subtitle"
          >
            {vacancyInfo?.content?.title}
            {/* Робота
            <br />в OPOS */}
          </motion.h2>
          <motion.div
            variants={childrenVariants}
            className="container_vertical content__text"
          >
            <p
              className="text"
              dangerouslySetInnerHTML={{
                __html: vacancyInfo?.content?.desc,
              }}
            />
          </motion.div>
        </motion.div>
        <Image
          className="vacancy-banner__img"
          src={vacancyInfo?.content?.photo  }
          alt={"Image"}
          loading="lazy"
          width={929}
          height={528}
        />
      </div>
    </section>
  );
}

VacancyBanner.propTypes = {
  vacancyInfo: PropType.array,
};

export default VacancyBanner;
