"use client";
import React from "react";
import { IconSvg } from "@/components";
import { motion } from "framer-motion";
import Link from "next/link";
import PropType from "prop-types";
import { useTranslations } from "next-intl";

function Subbanner({ info = {} }) {
  const t = useTranslations("Buttons");

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
      transform: "translateY(115%)",
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
    <section className="container_horizontal container_outer subbanner">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className="container container_horizontal subbanner__container"
      >
        <div className="container_vertical subbanner__content">
          <div className="container_animated container_animated_text_large">
            <motion.p
              variants={childrenVariants}
              className="text content__text"
            >
              {info?.desc1}
            </motion.p>
          </div>
          <IconSvg
            name="logoSingleColor"
            className="logo__icon"
            alt="logo"
            width="78"
            height="60"
          />
        </div>
        <div className="container_vertical subbanner__content">
          <div className="container_animated container_animated_text_large">
            <motion.h2
              variants={childrenVariants}
              className="text_large content__text_large"
            >
              {info?.desc2}
            </motion.h2>
          </div>
          <Link href="/about" className="button_white">
            <span className="button__text text"> {info?.btn?.title}</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

Subbanner.propTypes = {
  info: PropType.object,
};

export default Subbanner;
