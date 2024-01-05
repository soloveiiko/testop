"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

function JoinUs() {
  const t = useTranslations("AboutPage");
  const t_Buttons = useTranslations("Buttons");

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
    <section className="container_vertical container_outer join-us">
      <div className="container_vertical container join-us__container">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="container_animated container_animated_headline"
        >
          <motion.h4
            variants={childrenVariants}
            className="headline join-us__headline"
          >
            {t("join_us")}
          </motion.h4>
        </motion.div>
        <Link href="/vacancy" className="button_yellow">
          <span className="button__text text">
            {t_Buttons("view_vacancies")}
          </span>
        </Link>
      </div>
    </section>
  );
}

export default JoinUs;
