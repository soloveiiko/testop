"use client";
import IconSvg from "../base/iconSvg";
import { motion } from "framer-motion";

function Content({ aboutData }) {
  let activeMapBlock = null;
  const aboutItems = aboutData?.content?.items
    ?.map((block, index) => {
      if (block.title) {
        block.child = [block];
        activeMapBlock = block;
        return block;
      } else {
        activeMapBlock.child.push(block);
        return null;
      }
    })
    .filter((el) => el !== null);

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
    <section className="container_vertical container_outer content">
      <div className="container_vertical content__container">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="container_animated container_animated_subtitle aboutTitle"
        >
          <motion.h3
            variants={childrenVariants}
            className="subtitle content__subtitle"
          >
            {aboutData?.content?.about?.title}
          </motion.h3>
          <motion.div
            variants={childrenVariants}
            className="content__logo__container mobile-el"
          >
            <IconSvg
              name="logo"
              className="content__logo"
              alt="logo"
              width="78"
              height="60"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container_vertical content__item item__wrapper"
        >
          <div className="container_animated content__logo_animated desktop-el">
            <motion.div
              variants={childrenVariants}
              className="content__logo__container"
            >
              <IconSvg
                name="logo"
                className="content__logo"
                alt="logo"
                width="78"
                height="60"
              />
            </motion.div>
          </div>
          <div className="container_vertical item__text__wrapper">
            <div className="container_animated container_animated_text">
              <motion.div
                variants={childrenVariants}
                className="text item__text"
                dangerouslySetInnerHTML={{
                  __html: aboutData?.content?.about?.desc,
                }}
              ></motion.div>
            </div>
            {/* <div className="container_animated container_animated_text">
              <motion.p variants={childrenVariants} className="text item__text">
                У нашій компанії ми пишаємося нашою цілісною командою та дружнім
                колективом, які є серцем і душею нашої діяльності. Ми віримо в
                те, що справжній успіх приходить лише тоді, коли люди працюють
                разом як одне ціле, маючи спільні цілі та цінності.
              </motion.p>
            </div>
            <div className="container_animated container_animated_text">
              <motion.p variants={childrenVariants} className="text item__text">
                У нас ви знайдете команду, яка вірить в інтегрітет та відданість
                своїй роботі. Ми прагнемо досягти винятковості у всьому, що ми
                робимо, використовуючи високі стандарти та етичні принципи. Наші
                співробітники є професіоналами у своїх галузях і вкладають серце
                і душу у кожен проект, незалежно від його розміру чи складності.
              </motion.p>
            </div> */}
          </div>
        </motion.div>
        {aboutItems.map((item, index) => (
          <>
            <motion.div
              key={index}
              variants={parentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="container_animated container_animated_subtitle about__mission"
            >
              <motion.h3
                variants={childrenVariants}
                className="subtitle content__subtitle"
              >
                {item?.title}
              </motion.h3>
            </motion.div>
            <motion.div
              key={`children-${index}`}
              variants={parentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="container_vertical content__item"
            >
              {item.child.map((child, childI) => (
                <div
                  key={`child-${childI}`}
                  className="container_vertical item__wrapper"
                >
                  <div className="container_animated container_animated_subtitle">
                    <motion.h5
                      variants={childrenVariants}
                      className="subtitle item__subtitle"
                    >
                      {child?.subtitle}
                    </motion.h5>
                  </div>
                  <div className="container_vertical item__text__wrapper">
                    <div className="container_animated container_animated_text">
                      <motion.div
                        variants={childrenVariants}
                        className="text item__text"
                        dangerouslySetInnerHTML={{
                          __html: child?.desc,
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </>
        ))}
        {/* <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="container_animated container_animated_subtitle about__mission"
        >
          <motion.h3
            variants={childrenVariants}
            className="subtitle content__subtitle"
          >
            Місія та візія
          </motion.h3>
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container_vertical content__item"
        >
          <div className="container_vertical item__wrapper">
            <div className="container_animated container_animated_subtitle">
              <motion.h5
                variants={childrenVariants}
                className="subtitle item__subtitle"
              >
                01
              </motion.h5>
            </div>
            <div className="container_vertical item__text__wrapper">
              <div className="container_animated container_animated_text">
                <motion.p
                  variants={childrenVariants}
                  className="text item__text"
                >
                  OPOS – міжнародна компанія та надійний Партнер в високоякісних
                  протеїнах та продуктових рішеннях.
                </motion.p>
              </div>
              <div className="container_animated container_animated_text">
                <motion.p
                  variants={childrenVariants}
                  className="text item__text"
                >
                  Ми створюємо продуктові і сервісні рішення, <br />
                  що роблять наших клієнтів ефективними та щасливими
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="container_animated container_animated_subtitle about__mission"
        >
          <motion.h3
            variants={childrenVariants}
            className="subtitle content__subtitle"
          >
            Цінності
          </motion.h3>
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="container_vertical content__item"
        >
          <div className="container_vertical item__wrapper">
            <div className="container_animated container_animated_subtitle">
              <motion.h5
                variants={childrenVariants}
                className="subtitle item__subtitle"
              >
                02
              </motion.h5>
            </div>
            <div className="container_animated container_animated_text">
              <motion.div
                variants={childrenVariants}
                className="container_vertical item__container"
              >
                <h6 className="text_large_bold item__text_large_bold">
                  Системність
                </h6>
                <p className="text item__text">
                  Це основа довгострокових відносин, <br />
                  які є нашим найвищим пріоритетом
                </p>
              </motion.div>
            </div>
          </div>
          <div className="container_vertical item__wrapper">
            <div className="container_animated container_animated_subtitle">
              <motion.h5
                variants={childrenVariants}
                className="subtitle item__subtitle"
              >
                03
              </motion.h5>
            </div>
            <div className="container_animated container_animated_text">
              <motion.div
                variants={childrenVariants}
                className="container_vertical item__container"
              >
                <h6 className="text_large_bold item__text_large_bold">
                  Ефективність
                </h6>
                <p className="text item__text">
                  Підвищуючи власну ефективність ми хочемо робити найвигідніші
                  пропозиції нашим Партнерам, щоб кожен міг сфокусуватись на
                  створенні найкращих продуктів для споживачів
                </p>
              </motion.div>
            </div>
          </div>
          <div className="container_vertical item__wrapper">
            <div className="container_animated container_animated_subtitle">
              <motion.h5
                variants={childrenVariants}
                className="subtitle item__subtitle"
              >
                04
              </motion.h5>
            </div>

            <div className="container_animated container_animated_text">
              <motion.div
                variants={childrenVariants}
                className="container_vertical item__container"
              >
                <h6 className="text_large_bold item__text_large_bold">
                  Турбота та відповідальність
                </h6>
                <p className="text item__text">
                  Ми поважаємо домовленості, підтримуємо наших Клієнтів, надаємо
                  всебічний супровід, досвід та експертизу
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Content;
