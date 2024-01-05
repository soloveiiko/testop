"use client";
import React from "react";
import { motion } from "framer-motion";
import PropType from "prop-types";

function Statistic({ info = {} }) {
  const variants = {
    hidden: {
      transform: "translateY(215%)",
      y: 50,
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
  return (
    <section className="container_horizontal container_outer statistic">
      <motion.div
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.5,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="container container_horizontal statistic__container"
      >
        <div className="container_vertical statistic__content">
          <div className="item__container item__container_number">
            <motion.span
              variants={variants}
              className="number_large content__number_large"
            >
              {info?.years?.number}
            </motion.span>
            <motion.span
              variants={variants}
              className="subtitle content__subtitle"
            >
              {" "}
              {info?.years?.title}
            </motion.span>
          </div>
        </div>
        <div className="container_vertical statistic__content">
          <div className="item__container">
            <motion.div variants={variants} className="container_vertical item">
              <div className="container_horizontal item__wrapper">
                <span className="number_small"> {info?.clients?.number}</span>
                <sup className="number_small item__sup">+</sup>
              </div>
              <span className="text">{info?.clients?.title}</span>
            </motion.div>
          </div>
          <div className="item__container">
            <motion.div variants={variants} className="container_vertical item">
              <div className="container_horizontal item__wrapper">
                <span className="number_small"> {info?.peoples?.number}</span>
                <sup className="number_small item__sup">+</sup>
              </div>
              <span className="text">{info?.peoples?.title}</span>
            </motion.div>
          </div>
          <div className="item__container">
            <motion.div variants={variants} className="container_vertical item">
              <div className="container_horizontal item__wrapper">
                <span className="number_small"> {info?.teams?.number}</span>
                <sup className="number_small item__sup">+</sup>
              </div>
              <span className="text">{info?.teams?.title}</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

Statistic.propTypes = {
  info: PropType.object,
};

export default Statistic;
