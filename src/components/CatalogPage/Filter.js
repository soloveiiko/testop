"use client";

import Link from "next/link";
import { Button, IconSvg } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { useFilterModal } from "@/store/modals";

const items = [
  {
    id: "1",
    category: "Всі",
    link: "#",
  },
  {
    id: "2",
    category: "Риба",
    link: "#",
    subcategory: [
      { id: "1", title: "Хек", link: "#" },
      { id: "2", title: "Скумбрія", link: "#" },
      { id: "3", title: "Лосось", link: "#" },
    ],
  },
  {
    id: "3",
    category: "Яловичина",
    link: "#",
  },
  {
    id: "4",
    category: "Птиця",
    link: "#",
    subcategory: [
      { id: "1", title: "Курятина", link: "#" },
      { id: "2", title: "Індичка", link: "#" },
    ],
  },
  {
    id: "5",
    category: "Свинина",
    link: "#",
  },
  {
    id: "6",
    category: "Фарш",
    link: "#",
  },
];
export default function Filter() {
  const filterRef = useRef({});
  const [contentHeight, setContentHeight] = useState([]);
  const [isExpanded, setExpanded] = useState(
    Object.fromEntries(
      items.filter((item) => item.subcategory).map((item) => [item.id, true])
    )
  );

  const filterModal = useFilterModal();
  const closeFilter = () => {
    filterModal.toggle();
  };

  useEffect(() => {
    if (filterModal.isVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [filterModal.isVisible]);

  useEffect(() => {
    const handleResize = () => {
      const newContentHeight = Object.keys(filterRef.current).reduce(
        (acc, itemId) => {
          const itemHeight = filterRef.current[itemId]?.scrollHeight || 0;
          return { ...acc, [itemId]: itemHeight };
        },
        {}
      );
      setContentHeight(newContentHeight);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [filterRef]);

  const contentStyle = (itemId) => ({
    height: isExpanded[itemId] ? contentHeight[itemId] + "px" : "0rem",
    transition: "height .5s ease-in-out",
  });
  const handleOpen = (itemId) => {
    setExpanded((prevOpenState) => {
      return {
        ...prevOpenState,
        [itemId]: !prevOpenState[itemId],
      };
    });
  };

  return (
    <>
      <div
        className={filterModal.isVisible ? "overlay show" : "overlay hide"}
        onClick={closeFilter}
      ></div>
      <section className={`filter${filterModal.isVisible ? " open" : " hide"}`}>
        <div className="filter__close">
          <Button
            btnProps={{
              className: "button_white button_circle-small button_close",
            }}
            iconProps={{
              name: "cross",
              alt: "Close",
              width: 20,
              height: 20,
            }}
            onClick={closeFilter}
          />
        </div>
        <div className="container_vertical filter__list text">
          {items.map((item) => (
            <div
              key={item.id}
              className={`container_vertical filter__item${
                isExpanded.length === 0 || isExpanded[!item.id]
                  ? ""
                  : isExpanded[item.id]
                  ? " collapsed"
                  : " expanded"
              }`}
            >
              <div
                className="container_horizontal filter__item-container"
                onClick={() => handleOpen(item.id)}
              >
                <Link href={item.link} className="filter__category">
                  {item.category}
                </Link>
                {item.subcategory && (
                  <IconSvg
                    name="arrow"
                    className={`filter__icon${
                      isExpanded[item.id] ? " open " : ""
                    }`}
                    alt="Arrow"
                    width="16"
                    height="16"
                  />
                )}
              </div>
              {item.subcategory && (
                <div
                  className={`container_vertical filter__subcategories${
                    isExpanded[item.id] ? " open " : " hide"
                  }`}
                  ref={(element) => {
                    if (element) {
                      filterRef.current[item.id] = element;
                    } else {
                      delete filterRef.current[item.id];
                    }
                  }}
                  style={contentStyle(item.id)}
                >
                  {item.subcategory.map((el) => (
                    <Link
                      key={el.id}
                      href={el.link}
                      className="filter__category"
                    >
                      {el.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
