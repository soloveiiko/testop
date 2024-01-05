"use client";
import { useSearchModal } from "@/store/modals";
import { Button } from "@/components";
import { useTranslations } from "next-intl";

export default function Search() {
  const t = useTranslations("Search");

  const searchModal = useSearchModal();
  const openSearch = () => {
    searchModal.toggle();
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <section className="search-button">
      <Button
        btnProps={{
          className: "button_white button_icon-right search-button_gap",
        }}
        textProps={{ value: t("button") }}
        iconProps={{
          name: "search",
          className: "search-button_icon",
          alt: "Search",
          width: 16,
          height: 16,
        }}
        onClick={openSearch}
      />
    </section>
  );
}
