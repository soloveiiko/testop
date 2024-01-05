"use client";
import { motion } from "framer-motion";
import React from "react";

function ProgressCircle() {
  /* const radius = 150;
  const circumference = Math.ceil(2 * Math.PI * radius); */
  const circumference = "315%";
  const transition = {
    duration: 4,
    ease: "linear",
    repeat: Infinity,
    /* repeatType: "reverse", */
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: 0,
      transition,
    },
  };
  return (
    <div className="progress__container">
      <svg
        viewBox={"0 0 200 200"}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={100}
          cy={100}
          r={100}
          className="progress__circle"
          fill="transparent"
        />
      </svg>
      <motion.svg
        className="progress__svg"
        viewBox={"0 0 200 200"}
      >
        <motion.circle
          className="progress__circle circle__focus"
          cx={100}
          cy={100}
          r={100}
          fill="transparent"
          strokeDasharray={circumference}
          variants={variants}
          initial="hidden"
          animate="show"
        />
      </motion.svg>
    </div>
  );
}

export default ProgressCircle;
