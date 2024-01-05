import React from "react";
import VacancyCard from "./VacancyCard";
import PropType from "prop-types";

function VacancyList({ vacancyList = [] }) {
  return (
    <section className="container_vertical vacancy-list">
      {vacancyList.map((item, index) => (
        <VacancyCard key={index} id={index + 1} item={item} />
      ))}
      <VacancyCard />
      <VacancyCard />
    </section>
  );
}

VacancyList.propTypes = {
  vacancyList: PropType.array,
};

export default VacancyList;
