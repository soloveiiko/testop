"use client";
import { Button, IconSvg } from "@/components";
import { useState } from "react";
import Link from "next/link";
import { useSearchModal } from "@/store/modals";
import { useCatalogStore } from "@/store/product";
import { useTranslations } from "next-intl";

const items = [
  { id: "1", title: "Свиняча лопатка без кістки" },
  { id: "2", title: "Свиняча ніжка" },
  { id: "3", title: "Свиняча лопатка" },
  { id: "4", title: "Свиняча лопатка" },
  { id: "5", title: "Свиняча лопатка" },
  { id: "6", title: "Свиняча лопатка" },
  { id: "7", title: "Свиняча лопатка" },
];
export default function SearchModal() {
  const t = useTranslations("Search");

  const searchModal = useSearchModal();
  const { setExpanded } = useCatalogStore();

  const closeSearch = () => {
    searchModal.toggle();
    document.body.style.overflow = "auto";
  };

  function handleOnClick(index) {
    setExpanded(index, true);

    const element = document.getElementById(`item_${index}`);
    if (element) {
      element.classList.remove("expanded");
      element.classList.add("collapsed");
    }
  }

  const [inputValue, setInputValue] = useState("");
  const [showScrollbar, setShowScrollbar] = useState(false);
  const isNotEmpty = inputValue.trim() !== "";

  return (
    <div
      className={`container_vertical search-modal${
        searchModal.isVisible ? " open" : " hide"
      }`}
    >
      <div className="container_vertical search-modal__container">
        <div className="container_horizontal search-modal__input-controls">
          <div className="search-modal__input-container search-field">
            <input
              className={`search-field__input${
                isNotEmpty ? " search-field__input_not-empty" : ""
              }`}
              type="text"
              value={inputValue}
              placeholder={t("placeholder")}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {isNotEmpty ? (
              <div className="button__container search-field__button">
                <Button
                  btnProps={{ className: "button_yellow" }}
                  textProps={{ value: t("clean") }}
                  onClick={() => setInputValue("")}
                />
              </div>
            ) : (
              <IconSvg
                name="search"
                className="search-field__icon"
                alt="Search"
                width="16"
                height="16"
              />
            )}
          </div>
          <div className="button__container">
            <Button
              btnProps={{
                className:
                  "button_white button_circle-small button_close_border",
              }}
              iconProps={{
                name: "cross",
                alt: "Close",
                width: 16,
                height: 16,
              }}
              onClick={closeSearch}
            />
          </div>
        </div>
        <div className="container_vertical search-modal__results search-results">
          <h5 className="subtitle search-results__subtitle">
            {t("results")}
          </h5>
          <div
            className={`container_vertical text_large search-results__list ${
              showScrollbar ? "show-scrollbar" : ""
            }`}
          >
            {items.map((item) => (
              <Link
                href={`#item_${item.id}`}
                key={item.id}
                className="search-results__item"
                onMouseEnter={() => setShowScrollbar(true)}
                onMouseLeave={() => setShowScrollbar(false)}
                onClick={() => {
                  closeSearch();
                  handleOnClick(item.id);
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {/*<div className="search-modal__not-found search-not-found">*/}
        {/*  <h5 className="container_vertical subtitle search-not-found__subtitle">*/}
        {/*    <span className="search-not-found__item">Нічого не знайдено.</span>*/}
        {/*    <span className="search-not-found__item">Спробуйте ще раз</span>*/}
        {/*  </h5>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
