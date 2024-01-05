"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PropType from "prop-types";

function Contacts({ info = {}, phone = {} }) {
  // const items = [
  //   {
  //     city: "Київ",
  //     adress: "Казимира Малевича, 86",
  //   },
  //   {
  //     city: "Луцьк",
  //     adress: "Богдана Хмельницького, 42",
  //   },
  //   {
  //     city: "Варшава",
  //     adress: "Przeskok 2, 00-032",
  //   },
  // ];
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
    <section className="container_vertical container_outer contacts">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container_vertical container contacts__container"
      >
        <div className="container_animated container_animated_title">
          <motion.div variants={childrenVariants} className="contacts__email">
            <span className="text_large contacts__label">
              {info?.email?.title}
            </span>
            <Link href={info?.email?.email} passHref className="title email">
              {info?.email?.email}
            </Link>
          </motion.div>
        </div>
        <div className="container_animated container_animated_subtitle">
          <motion.div
            variants={childrenVariants}
            className="container_vertical contacts__content contacts__phone"
          >
            <span className="text_large contacts__label">
              {phone?.items[0]?.title}
            </span>
            <Link
              href={phone?.items[0]?.subtitle}
              passHref
              className="subtitle phone"
            >
              {phone?.items[0]?.subtitle}
            </Link>
          </motion.div>
        </div>
        <div className="container_vertical contacts__content contacts__content_adress">
          <div className="container_animated container_animated_text_large">
            <motion.span
              variants={childrenVariants}
              className="text_large contacts__label"
            >
              Приходьте
            </motion.span>
          </div>
          <ul className="container_vertical contacts__adress">
            {info?.items.map((item, index) => (
              <li
                key={index}
                className="container_animated container_animated_text"
              >
                <motion.div
                  variants={childrenVariants}
                  className="container_vertical adress__item"
                >
                  <h5 className="subtitle item__city">{item?.subtitle}</h5>
                  <Link
                    target="_blank"
                    href={item?.btn?.url}
                    passHref
                    className="text item__adress"
                  >
                    {item?.btn?.title}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

Contacts.propTypes = {
  info: PropType.object,
  phone: PropType.object,
};

export default Contacts;
