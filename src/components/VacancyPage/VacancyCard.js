"use client";
import React from "react";
import Button from "../base/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

function VacancyCard({ id, item }) {
  const t = useTranslations("Buttons");

  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      /* transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      }, */
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
    <>
      {item && (
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          className="container_vertical vacancy-card"
        >
          <div className="container_horizontal vacancy-card__content">
            <div className="container_vertical content__container">
              <div className="container_animated container_animated_text">
                <motion.span
                  variants={childrenVariants}
                  className="text content__number"
                >
                  {id < 10 ? `0${id}` : id}
                </motion.span>
              </div>
            </div>
            <div className="container_vertical content__container">
              <div className="container_animated container_animated_subtitle">
                <motion.h3 variants={childrenVariants} className="subtitle">
                  {item?.title}
                </motion.h3>
              </div>
              <Link href={item?.btn?.url} className="button_yellow">
                <span className="button__text text">{item?.btn?.title}</span>
              </Link>
            </div>
          </div>
          <hr className="vacancy-card__divider" />
        </motion.div>
      )}
    </>
  );
}

export default VacancyCard;
