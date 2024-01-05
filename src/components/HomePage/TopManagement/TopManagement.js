import React from "react";
import { TopManagementSlider } from "@/components";
import PropType from "prop-types";
import { useTranslations } from "next-intl";

function TopManagement({ info = {} }) {
  const t = useTranslations("HomePage");

  return (
    <section className="container_horizontal container_outer topmanagement">
      <div className="container container_vertical topmanagement__container">
        <span className="text_large topmanagement__title">{info?.title}</span>
        <div className="container_vertical topmanagement__wrapper">
          <TopManagementSlider items={info?.items} />
        </div>
      </div>
    </section>
  );
}

TopManagement.propTypes = {
  info: PropType.object,
};

export default TopManagement;
