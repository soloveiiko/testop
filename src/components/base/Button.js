"use client";
import IconSvg from "@components/base/iconSvg";
import Image from "next/image";
import PropType from "prop-types";

Button.propTypes = {
  btnProps: PropType.object,
  textProps: PropType.object,
  iconProps: PropType.object,
  imageProps: PropType.object,
};

export default function Button({
  btnProps = {
    type: "button",
    className: "button",
    title: "button",
  },
  textProps = {
    props: {
      className: "",
    },
    value: "",
  },
  iconProps = {
    name: "",
    className: "",
    alt: "",
    width: 20,
    height: 20,
  },
  imageProps = {
    className: "",
    src: "",
    alt: "",
    width: 38,
    height: 38,
  },
  onClick,
}) {
  return (
    <button {...btnProps} onClick={onClick}>
      {textProps.value && (
        <span className={`button__text text ${textProps.className || ""}`}>
          {textProps.value}
        </span>
      )}
      {iconProps.name && (
        <IconSvg
          className={`button__icon ${iconProps.className || ""}`}
          {...iconProps}
        />
      )}
      {imageProps.src && (
        <Image
          className={`button__image ${imageProps.className || ""}`}
          alt={imageProps.alt}
          {...imageProps}
        />
      )}
    </button>
  );
}
