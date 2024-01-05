"use client";
import React from "react";
import IconSvg from "../base/iconSvg";
import { motion } from "framer-motion";
import Button from "../base/Button";
import { useTranslations } from "next-intl";


function Showreel() {
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
        duration: 1.5,
      },
    },
  };
  return (
    <motion.section
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="container_horizontal showreel"
    >
      <div className="container_vertical showreel__container">
        <div className="container_horizontal showreel__header">
          <IconSvg
            name="logo"
            className="showreel__logo"
            alt="logo"
            width="104"
            height="80"
          />
          <h3 className="subtitle showreel__subtitle">Showreel</h3>
        </div>
        <Button
          btnProps={{
            className: "button_yellow button_icon-right showreel__button",
          }}
          textProps={{ value: t("watch") }}
          iconProps={{
            name: "play",
            alt: "Logo",
            width: 16,
            height: 16,
          }}
        />
      </div>
      <motion.div variants={childrenVariants} className="showreel__bg">
        <IconSvg name="circle" alt="Circle" width="1112" height="1112" />
      </motion.div>
    </motion.section>
  );
}

export default Showreel;
