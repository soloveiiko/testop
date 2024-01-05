"use client";
import Image from "next/image";

function AboutBanner({bannerData}) {
  return (
    <section className="container_vertical about-banner">
      <div className="container_vertical about-banner__container">
        <h2 className="headline about-banner__headline">{bannerData.content.title}</h2>
        <Image
          className="about-banner__img"
          src={bannerData.content.photo}
          alt={"Image"}
          loading="lazy"
          width="1920"
          height="890"
        />
      </div>
    </section>
  );
}

export default AboutBanner;
