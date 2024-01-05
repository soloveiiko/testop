"use client";
import { Button } from "@/components";
import { useFilterModal } from "@/store/modals";

export default function FilterButton() {
  const filterModal = useFilterModal();
  const openFilter = () => {
    filterModal.toggle();
  };

  return (
    <section className="filter-button">
      <Button
        btnProps={{
          className: "button_white button_circle-small",
        }}
        iconProps={{
          name: "filter",
          alt: "Filter",
          width: 20,
          height: 20,
        }}
        onClick={openFilter}
      />
    </section>
  );
}
