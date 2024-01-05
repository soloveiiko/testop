"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function PromotionItem({
  length,
  item,
  index,
  scrollYProgress,
}) {
  const itemRef = useRef();
  const [parallaxPosition, setParallaxPosition] = useState(null);

  scrollYProgress.onChange(() => {
    const blocksPosition = itemRef.current.getBoundingClientRect().x;

    setParallaxPosition(`translateX(${blocksPosition / 3}px)`);
  });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 1 }}
      transition={{ direction: 1 }}
      className="container_horizontal promotion-section__item"
    >
      <div className="container_vertical promotion-section__wrapper">
        <span
          style={{ transform: parallaxPosition }}
          className="number promotion-section__number"
        >
          {item?.number}
        </span>
        <span className="text promotion-section__pagination">
          {item?.number} / 0{length}
        </span>
        <div className="promotion-section__img-container">
          <Image
            src={item?.photo}
            alt={item?.title}
            className="promotion-section__image"
            width={1200}
            height={674.839}
          />
        </div>
        <div
          className="container_vertical promotion-section__text-container"
          style={{ transform: parallaxPosition }}
        >
          <h5 className="subtitle promotion-section__subtitle ">
            {item?.title}
          </h5>
          <p className="text promotion-section__text">{item?.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
