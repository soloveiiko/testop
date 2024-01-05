"use client";
import React, { useEffect } from "react";
import Button from "../base/Button";

function ModalLayout({
  name = "Modal",
  text = null,
  zIndex = 13,
  setModalVisible,
  children,
  isVisible = false,
}) {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [isVisible]);

  return (
    <>
      <div
        className={isVisible ? "overlay show" : "overlay hide"}
        style={{ zIndex: zIndex }}
        onClick={setModalVisible}
      ></div>
      <dialog
        open={isVisible}
        className={"container_vertical modal" + (isVisible ? " show" : " hide")}
        style={{ zIndex: zIndex }}
      >
        <div className="container_vertical modal__top">
          <div className="container_horizontal icon__container">
            <Button
              btnProps={{
                className: "button_white button_circle-small button_close",
              }}
              iconProps={{
                name: "cross",
                alt: "Close",
                width: 24,
                height: 24,
              }}
              onClick={setModalVisible}
            />
          </div>
          <div className="container_vertical modal__header">
            <h2 className="text_large_bold">{name}</h2>
            {text && <p className="text">{text}</p>}
          </div>
        </div>
        {children}
      </dialog>
    </>
  );
}

export default ModalLayout;
