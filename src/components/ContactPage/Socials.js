import Link from "next/link";
import React from "react";
import IconSvg from "../base/iconSvg";
import PropType from "prop-types";
import Image from "next/image";
function Socials({ info }) {
  return (
    <section className="container_vertical container_outer socials">
      <div className="container_vertical container socials__container">
        <span className="text_large">{info?.subtitle}</span>
        <h4 className="headline socials__headline">{info?.title}</h4>
        <div className="container_horizontal socials__buttons">
          {info?.items.map((social, index) => (
            <Link href={social?.url} className="socials__link" key={index}>
              <div className="container_vertical socials__card">
                <IconSvg
                  name={social?.icon}
                  className="socials__icon"
                  alt={social?.icon}
                  width="24"
                  height="24"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

Socials.propTypes = {
  info: PropType.object,
};

export default Socials;
