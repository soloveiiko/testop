"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PromotionItem from "@components/HomePage/Promotion/PromotionItem";
import PropType from "prop-types";

function Promotion({ info = {} }) {
  const scrollPromotionRef = useRef(null);
  const ghostPromotionRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollPromotionRef,
  });

  const xPromotionSlider = useTransform(
    scrollYProgress,
    [0, 1],
    [`0rem`, `${scrollRange - viewportW}px`]
  );

  useLayoutEffect(() => {
    const handleResize = () => {
      setScrollRange(ghostPromotionRef.current.offsetWidth);
      setViewportW(scrollPromotionRef.current.clientWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={scrollPromotionRef} className="promotion-section">
      <div className="promotion-section__container">
        <motion.div
          ref={ghostPromotionRef}
          style={{ x: xPromotionSlider }}
          className="container_horizontal promotion-section__list"
        >
          {info?.items.map((item, index) => (
            <PromotionItem
              key={index}
              // items={items}
              length={info?.items.length}
              item={item}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

Promotion.propTypes = {
  info: PropType.object,
};
export default Promotion;
