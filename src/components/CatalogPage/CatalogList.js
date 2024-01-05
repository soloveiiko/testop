"use client";
import Image from "next/image";
import { Button, ProductImgSlider } from "@/components";
import { useEffect, useRef, useState } from "react";
import { useBecamePartnerModals } from "@/store/modals";
import { useCatalogStore } from "@/store/product";
import meat1 from "@public/images/catalogPage/catalog/meat1.webp";
import meat2 from "@public/images/catalogPage/catalog/meat2.webp";
import meat3 from "@public/images/catalogPage/catalog/meat3.webp";
import meat4 from "@public/images/catalogPage/catalog/meat4.webp";
import defaultImg from "@public/images/catalogPage/catalog/default.webp";
import { useTranslations } from "next-intl";
const items = [
  {
    id: "1",
    title: "Свиняча лопатка без кістки",
    images: [],
    number: "1108",
    addition: {
      country: "ЄС, Канада, Україна",
      expiration: "18-24 місяця",
      packaging:
        "Індивідуальна упаковка або вакуумна упаковка " +
        "кожної частини по 4-7 шт в 1 картонній " +
        "коробці/Індивідуальна упаковка в Джамбо " +
        "картоні по 400-500 кг",
      appointment:
        "Для подальшого розділення та переробки" +
        " чи реалізації в роздрібній торгівлі",
    },
  },
  {
    id: "2",
    title: "Свиняча ніжка",
    images: [{ url: meat1 }],
    number: "1108",
    addition: {
      country: "ЄС, Канада, Україна",
      expiration: "18-24 місяця",
      packaging:
        "Індивідуальна упаковка або вакуумна упаковка " +
        "кожної частини по 4-7 шт в 1 картонній " +
        "коробці/Індивідуальна упаковка в Джамбо " +
        "картоні по 400-500 кг",
      appointment:
        "Для подальшого розділення та переробки" +
        " чи реалізації в роздрібній торгівлі",
    },
  },
  {
    id: "3",
    title: "Свиняча лопатка без кістки",
    images: [{ url: meat2 }, { url: meat2 }, { url: meat2 }],
    number: "1108",
    addition: {
      country: "ЄС, Канада, Україна",
      expiration: "18-24 місяця",
      packaging:
        "Індивідуальна упаковка або вакуумна упаковка " +
        "кожної частини по 4-7 шт в 1 картонній " +
        "коробці/Індивідуальна упаковка в Джамбо " +
        "картоні по 400-500 кг",
      appointment:
        "Для подальшого розділення та переробки" +
        " чи реалізації в роздрібній торгівлі",
    },
  },
  {
    id: "4",
    title: "Свиняча ніжка",
    images: [{ url: meat3 }, { url: meat3 }, { url: meat4 }],
    number: "1108",
    addition: {
      country: "ЄС, Канада, Україна",
      expiration: "18-24 місяця",
      packaging:
        "Індивідуальна упаковка або вакуумна упаковка " +
        "кожної частини по 4-7 шт в 1 картонній " +
        "коробці/Індивідуальна упаковка в Джамбо " +
        "картоні по 400-500 кг",
      appointment:
        "Для подальшого розділення та переробки" +
        " чи реалізації в роздрібній торгівлі",
    },
  },
  {
    id: "5",
    title: "Свиняча лопатка без кістки",
    images: [{ url: meat4 }, { url: meat4 }, { url: meat4 }],
    number: "1108",
    addition: {
      country: "ЄС, Канада, Україна",
      expiration: "18-24 місяця",
      packaging:
        "Індивідуальна упаковка або вакуумна упаковка " +
        "кожної частини по 4-7 шт в 1 картонній " +
        "коробці/Індивідуальна упаковка в Джамбо " +
        "картоні по 400-500 кг",
      appointment:
        "Для подальшого розділення та переробки" +
        " чи реалізації в роздрібній торгівлі",
    },
  },
  {
    id: "6",
    title: "Свиняча ніжка",
    images: [{ url: meat4 }, { url: meat4 }, { url: meat4 }],
    number: "1108",
    addition: {
      country: "ЄС, Канада, Україна",
      expiration: "18-24 місяця",
      packaging:
        "Індивідуальна упаковка або вакуумна упаковка " +
        "кожної частини по 4-7 шт в 1 картонній " +
        "коробці/Індивідуальна упаковка в Джамбо " +
        "картоні по 400-500 кг",
      appointment:
        "Для подальшого розділення та переробки" +
        " чи реалізації в роздрібній торгівлі",
    },
  },
];

export default function CatalogList() {
  const t = useTranslations("Buttons");

  const isExpanded = useCatalogStore((state) => state.isExpanded);
  const setExpanded = useCatalogStore((state) => state.setExpanded);

  function handleOnClick(index) {
    setExpanded(index, !isExpanded[index]);

    const element = document.getElementById(`item_${index}`);
    if (element) {
      if (isExpanded[index]) {
        element.classList.remove("collapsed");
        element.classList.add("expanded");
      } else {
        element.classList.add("collapsed");
        element.classList.remove("expanded");
      }
    }
  }

  const [contentHeight, setContentHeight] = useState([]);
  const contentRef = useRef({});
  const toggleBecomePartner = useBecamePartnerModals((state) => state.toggle);
  useEffect(() => {
    const handleResize = () => {
      const newContentHeight = Object.keys(contentRef.current).reduce(
        (acc, itemId) => {
          const itemHeight = contentRef.current[itemId]?.scrollHeight || 0;
          return { ...acc, [itemId]: itemHeight };
        },
        {},
      );
      setContentHeight(newContentHeight);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  const contentStyle = (itemId) => ({
    height: isExpanded[itemId] ? contentHeight[itemId] + "px" : "0rem",
    transition: "height .3s linear",
  });

  return (
    <section className="container_vertical catalog-list">
      {items.map((item) => (
        <div
          key={item.id}
          id={`item_${item.id}`}
          className="catalog-list__item catalog-item"
        >
          <div className="catalog-item_top">
            <span className="text catalog-item__code">{item.number}</span>
            <h5 className="subtitle catalog-item__subtitle">{item.title}</h5>
            <div className="container_horizontal catalog-item__btn-container">
              <div className="button__container">
                <Button
                  btnProps={{ className: "button_yellow" }}
                  textProps={{ value: t("order") }}
                  onClick={() => toggleBecomePartner(t("order"))}
                />
              </div>
              <div className="button__container">
                <Button
                  btnProps={{
                    className: `button_dropdown button_icon-right ${isExpanded[item.id] ? "button_dropdown_checked" : ""}`,
                  }}
                  textProps={{
                    value: `${isExpanded[item.id] ? t("less") : t("more")}`,
                  }}
                  iconProps={{
                    name: "arrow",
                    alt: "Arrow",
                    width: 18,
                    height: 18,
                  }}
                  onClick={() => handleOnClick(item.id)}
                />
              </div>
            </div>
          </div>
          <div className="catalog-item__img-container">
            <Image
              className="catalog-item__image"
              src={item.images.length > 0 ? item.images[0].url : defaultImg}
              alt={item.title}
              height={305}
              width={467}
            />
          </div>
          <div
            className="container_vertical catalog-item__more-information"
            ref={(element) => {
              if (element) {
                contentRef.current[item.id] = element;
              } else {
                delete contentRef.current[item.id];
              }
            }}
            style={contentStyle(item.id)}
          >
            {item.images.length > 0 ? (
              <ProductImgSlider images={item.images} title={item.title} />
            ) : (
              <div className="catalog-item__default-container">
                <Image
                  className="catalog-item__default-image"
                  src={defaultImg}
                  alt={item.title}
                  width={928}
                  height={610}
                />
              </div>
            )}
            {item.addition && (
              <div className="container_horizontal catalog-item__information text">
                <div className="container_vertical catalog-item__container">
                  <span className="catalog-item__title">
                    Країна походження:
                  </span>
                  <span className="catalog-item__value">
                    {item.addition.country}
                  </span>
                </div>
                <div className="container_vertical catalog-item__container">
                  <span className="catalog-item__title">
                    Термін придатності:
                  </span>
                  <span className="catalog-item__value">
                    {item.addition.expiration}
                  </span>
                </div>
                <div className="container_vertical catalog-item__container">
                  <span className="catalog-item__title">Пакування:</span>
                  <span className="catalog-item__value">
                    {item.addition.packaging}
                  </span>
                </div>
                <div className="container_vertical catalog-item__container">
                  <span className="catalog-item__title">
                    Цільове призначення:
                  </span>
                  <span className="catalog-item__value">
                    {item.addition.appointment}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
