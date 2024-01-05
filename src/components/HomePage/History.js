"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import history from "@public/images/homePage/history/history.webp";
import history2 from "@public/images/homePage/history/history2.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import PropType from "prop-types";

const items = [
  {
    id: "1",
    year: "1999",
    description:
      'Отримав нагороду "Український імпортер року" за основним ' +
      'видом діяльності УКТ ЗЕД 02 "М\'ясо і продукти харчування"',
    image: history,
  },
  {
    id: "2",
    year: "2003",
    description:
      'Отримав нагороду "Український імпортер року" за основним ' +
      'видом діяльності УКТ ЗЕД 02 "М\'ясо і продукти харчування"',
    image: history,
  },
  {
    id: "3",
    year: "2010",
    description:
      'Отримав нагороду "Український імпортер року" за основним ' +
      'видом діяльності УКТ ЗЕД 02 "М\'ясо і продукти харчування"',
    image: history,
  },
  {
    id: "4",
    year: "2017",
    description:
      'Отримав нагороду "Український імпортер року" за основним ' +
      'видом діяльності УКТ ЗЕД 02 "М\'ясо і продукти харчування"',
    image: history,
  },
  {
    id: "5",
    year: "2023",
    description: "Завершено будівництво складу для широкого спектру продукції",
    image: history2,
  },
];
function History({ info = {} }) {
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
      display: "block",
      transform: "translateY(115%)",
      y: 50,
    },
    visible: {
      display: "block",
      transform: "translateY(0)",
      y: 0,
      transition: {
        ease: "circIn",
        duration: 0.7,
      },
    },
  };

  return (
    <section className="container_horizontal container_outer history">
      <Tabs className="container_horizontal container history__tabs">
        <TabList className="history__tab-list">
          {info?.items.map((el, index) => (
            <Tab key={index} className="text history__tab-item">
              {el.year}
            </Tab>
          ))}
        </TabList>
        <div className="history__tabs-wrapper">
          {info?.items.map((el) => (
            <TabPanel key={el.weight} className="history__tabs-panel">
              {/* <p variants={childrenVariants} className="text content__text"></p> */}
              <div className="container_animated container_animated_number history__number">
                <motion.h3
                  variants={childrenVariants}
                  initial="hidden"
                  animate="visible"
                  className="number history__number"
                >
                  {el.year}
                </motion.h3>
              </div>
              <div className="container_animated container_animated_text history__description">
                <motion.span
                  variants={childrenVariants}
                  initial="hidden"
                  animate="visible"
                  className="text history__description"
                >
                  {el.desc}
                </motion.span>
              </div>
              <div className="container_animated history__img-container">
                <motion.div
                  variants={childrenVariants}
                  initial="hidden"
                  animate="visible"
                  className="container_horizontal history__img-container"
                >
                  <Image
                    className="history__image"
                    src={el.photo}
                    alt={el.year}
                    width={445}
                    height={297}
                  />
                </motion.div>
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </section>
  );
}

History.propTypes = {
  info: PropType.object,
};

export default History;
