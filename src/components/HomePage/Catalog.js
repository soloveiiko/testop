"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PropType from "prop-types";

function Catalog({ info = {} }) {
  // const items = [
  //   {
  //     id: "1",
  //     name: "Риба",
  //     image: fish,
  //   },
  //   {
  //     id: "2",
  //     name: "Свинина",
  //     image: pork,
  //   },
  //   {
  //     id: "3",
  //     name: "Птиця",
  //     image: chicken,
  //   },
  //   {
  //     id: "4",
  //     name: "Яловичина",
  //     image: beef,
  //   },
  //   {
  //     id: "5",
  //     name: "Фарш",
  //     image: stuffing,
  //   },
  //   {
  //     id: "6",
  //     name: "Напівфабрикати",
  //     image: semi,
  //   },
  //   {
  //     id: "7",
  //     name: "Сало",
  //     image: salo,
  //   },
  //   {
  //     id: "8",
  //     name: "Інше",
  //     image: other,
  //   },
  // ];

  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const [marginLeft, setMarginLeft] = useState("");

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });
  const xCatalogSlider = useTransform(
    scrollYProgress,
    [0, 1],
    [`${marginLeft}rem`, `${-scrollRange + viewportW - 80}px`],
  );

  useEffect(() => {
    if (window.innerWidth >= 1441) {
      setMarginLeft("655");
    } else if (window.innerWidth <= 1440 && window.innerWidth >= 1280) {
      setMarginLeft("499");
    } else if (window.innerWidth <= 1279 && window.innerWidth >= 768) {
      setMarginLeft("200");
    } else {
      setMarginLeft("10");
    }
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setScrollRange(ghostRef.current.offsetWidth);
      setViewportW(scrollRef.current.clientWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={scrollRef}
      className="container_horizontal catalog-section catalog-scroll"
    >
      <div className="catalog-section__container">
        <h4 className="headline catalog-section__headline">{info.title}</h4>
        <motion.div
          ref={ghostRef}
          className="catalog-section__list"
          style={{ x: xCatalogSlider }}
        >
          {info?.categories.map((el) => (
            <div
              key={el.id}
              className="container_vertical catalog-section__item"
            >
              <Image
                src={el?.photo?.url}
                alt={el?.alt}
                className="catalog-section__image"
                width="186"
                height="186"
              />
              <h6 className="text_large_bold">{el.name}</h6>
            </div>
          ))}
        </motion.div>
        <div className="button__container catalog-section__button">
          <Link href="/catalog" className="button_yellow">
            <span className="button__text text">
              Переглянути {info?.products_count} товарів
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

Catalog.propTypes = {
  info: PropType.object,
};

export default Catalog;
